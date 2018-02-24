(function() {
  'use strict';

 
  var btnConnect = document.querySelector('.btn-connect');
  var btnDisconnect = document.querySelector('.btn-disconnect');
  var btnPublish = document.querySelector('.btn-publish');
  var btnSubscribe = document.querySelector('.btn-subscribe');
  var btnUnsubscribe = document.querySelector('.btn-unsubscribe');
  var btnClear = document.querySelector('.btn-clear');


  var inputTopicPub = document.querySelector('.input-topic-pub');
  var inputMessage = document.querySelector('.input-message');
  var inputTopicSub = document.querySelector('.input-topic-sub');

  var messages = document.querySelector('.messages');
  var client, appendMessage, clearMessages;
  
  
  
   
   var dis =document.getElementsByClassName("btn-disconnect");
   console.log(dis);
   for(var i = 0; i < dis.length; i++) {
  dis[i].disabled = true;
		}
   
   
    var con=document.getElementsByClassName("btn-connect");
     console.log(con);
   for(var i = 0; i < dis.length; i++) {
  con[i].disabled = false;
		}
  
  
  
  
  var unsub =document.getElementsByClassName("btn-unsubscribe");
   console.log(unsub);
   for(var i = 0; i < unsub.length; i++) {
  unsub[i].disabled = true;
		}
  
  
  
    var sub =document.getElementsByClassName("btn-subscribe");
   console.log(sub);
   for(var i = 0; i < sub.length; i++) {
  sub[i].disabled = true;
		}
   
 
 
 
  
  btnConnect.addEventListener('click', function(e) {
    e.preventDefault();
	
	
    client = mows.createClient('ws://broker.hivemq.com:8000');
	
	
	var dis =document.getElementsByClassName("btn-disconnect");
   console.log(dis);
   for(var i = 0; i < dis.length; i++) {
  dis[i].disabled = false;
		}
	  
	  
	var con=document.getElementsByClassName("btn-connect");
     console.log(con);
   for(var i = 0; i < dis.length; i++) {
  con[i].disabled = true;
		}  
		
	var dis =document.getElementsByClassName("btn-subscribe");
   console.log(dis);
   for(var i = 0; i < dis.length; i++) {
  dis[i].disabled = false;
		}

    var dis =document.getElementsByClassName("btn-unsubscribe");
   console.log(dis);
   for(var i = 0; i < dis.length; i++) {
  dis[i].disabled = true;
		}		
	
	
    appendMessage('You are connected..');
    client.on('message', function (topic, message) {
      console.log(message);
      appendMessage(message);
	   
    });
  });

  btnDisconnect.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.end();
    appendMessage('Connection lost..');
	
	 var dis =document.getElementsByClassName("btn-disconnect");
   console.log(dis);
   for(var i = 0; i < dis.length; i++) {
  dis[i].disabled = true;
		}
	
	
	
	var con=document.getElementsByClassName("btn-connect");
     console.log(con);
   for(var i = 0; i < dis.length; i++) {
  con[i].disabled = false;
		}
		
	 var dis =document.getElementsByClassName("btn-subscribe");
   console.log(dis);
   for(var i = 0; i < dis.length; i++) {
  dis[i].disabled = true;
		}
		
	var dis =document.getElementsByClassName("btn-unsubscribe");
   console.log(dis);
   for(var i = 0; i < dis.length; i++) {
  dis[i].disabled = true;
		}	
	
  });

  btnPublish.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.publish(inputTopicPub.value, inputMessage.value);
  });

  
  
  
  
  
  
  btnSubscribe.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.subscribe(inputTopicSub.value);
	
	 var unsub =document.getElementsByClassName("btn-unsubscribe");
   console.log(unsub);
   for(var i = 0; i < unsub.length; i++) {
  unsub[i].disabled = false;
		}
  
  
  
    var sub =document.getElementsByClassName("btn-subscribe");
   console.log(sub);
   for(var i = 0; i < sub.length; i++) {
  sub[i].disabled = true;
		}
	
	
	
	
	
	
	
	
	
    appendMessage('subscribe -> ' + inputTopicSub.value);
  });

  btnUnsubscribe.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.unsubscribe(inputTopicSub.value);
	
	
	 var unsub =document.getElementsByClassName("btn-unsubscribe");
   console.log(unsub);
   for(var i = 0; i < unsub.length; i++) {
  unsub[i].disabled = true;
		}
  
  
  
    var sub =document.getElementsByClassName("btn-subscribe");
   console.log(sub);
   for(var i = 0; i < sub.length; i++) {
  sub[i].disabled = false;
		}
	
	
	
	
	
	
	
    appendMessage('unsubscribe -> ' + inputTopicSub.value);
  });

  btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    clearMessages();
  });

  appendMessage = function(message) {
    var element = document.createElement('p');
    var string = document.createTextNode(message);
    element.appendChild(string);
    messages.appendChild(element);
  }

  clearMessages = function() {
    var count = messages.childNodes.length;
    for(var i=0; i<count; i++) {
      messages.removeChild(messages.firstChild);
    }
  }

})();