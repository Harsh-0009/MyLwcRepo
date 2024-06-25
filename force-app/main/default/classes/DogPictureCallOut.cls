

public with sharing class DogPictureCallOut { 


  @AuraEnabled
  public static string getDogPicture(){
    Http http = new Http();
    HttpRequest req = new HttpRequest();
    req.setEndpoint('callout:DogPicAPI');
    req.setMethod('GET');

    HttpResponse res = http.send(req);
    return res.getBody();
    

}

}

