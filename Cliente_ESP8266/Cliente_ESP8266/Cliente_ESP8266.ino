#include <ArduinoJson.h>

#include <DHT.h>
#include <DHT_U.h>

#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <SocketIoClient.h>

ESP8266WiFiMulti WiFiMulti;
SocketIoClient webSocket;

int periodo = 1000;                                   //periodo del envio de datos: temperatura y humedad
unsigned long TiempoAhora = 0;

int button = 0;
boolean flag=false;

int pinSensor = 2;
String temp, hum;

int switch1 = 14;
int switch2 = 12;

DHT dht (pinSensor, DHT11);
DynamicJsonDocument doc(1024);


void eventLed(const char * payload, size_t length) {
  //if(String((char*)payload)=="Hola"){
  //Serial.println("Dato esperado");
  //}
  deserializeJson(doc, String((char*)payload));                         //Converción de "payload" a Json
  JsonObject obj = doc.as<JsonObject>();                                //Converción de "payload" a Json
  int Red = obj[String("R")];
  int Green = obj[String("G")];
  int Blue = obj[String("B")];
  analogWrite(16, Red);
  analogWrite(5, Green);
  analogWrite(4, Blue);
}


void eventToggle(const char * payload, size_t length) {
  deserializeJson(doc, String((char*)payload));                         //Converción de "payload" a Json
  JsonObject obj = doc.as<JsonObject>();                                //Converción de "payload" a Json
  boolean toggle1 = obj[String("toggle1")];
  boolean toggle2 = obj[String("toggle2")];
  digitalWrite(switch1, toggle1);
  digitalWrite(switch2, toggle2);
}



void setup() {

  Serial.begin(115200);
  dht.begin();
  Serial.println("Iniciando");

  pinMode(16, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(switch1 , OUTPUT);
  pinMode(switch2 , OUTPUT);
  pinMode(button, INPUT_PULLUP);

  WiFiMulti.addAP("INFINITUMr7tf", "910c52701e");

  while (WiFiMulti.run() != WL_CONNECTED) {
    delay(100);
  }


  webSocket.on("rgbESP", eventLed);
  webSocket.on("toggleESP", eventToggle);
  webSocket.emit("alerta", "\"Alerta desde ESP8266\"");
  webSocket.begin("192.168.1.86", 5000);
}



void loop() {
  webSocket.loop();
  if (millis() > TiempoAhora + periodo) {
    temp = String(dht.readTemperature());
    hum =  String(dht.readHumidity());
    String formato = "{\"Temperatura\":\"" + temp + "\",\"Humedad\":\"" + hum + "\"}" ;     //Formato JSON de los datos a enviar
    const char *casteo = const_cast<char*>(formato.c_str());                                //Casteo del dato a enviar
    webSocket.emit("thcESP", casteo);                                                      //Envio de datos al servidor

    TiempoAhora = millis();
  }

  boolean push = digitalRead(button);
  if(push != flag){
    flag = push;
    delay(10);
    if(push==false){
      webSocket.emit("pushESP", "\"push\"");
    }else if(push==true){
      webSocket.emit("pushESP", "\"notPush\"");
    }
  }
}
