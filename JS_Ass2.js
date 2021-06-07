function calculate()
{
    var Charge="";
    var totalCall=document.getElementById("i_call").value;
    var totalSms=document.getElementById("i_sms").value;
    if(totalCall<=50 && totalSms<=50 )
    {
        call=((totalCall*50)/100);
        sms=(totalSms*0);
        Charge=call+sms;
    }

    if(((totalCall>50)&&(totalCall<=150))&&((totalSms>50) && (totalSms<=200 )))
    {
        call=((50*50)/100) + (((totaCall-50)*70)/100);
       sms=(50*0)+(((totalSms-50)*25)/100);
      Charge=call+sms;
    }

    if(((totalCall>150)&&(totalCall<=300))&&((totalSms>200) && (totalSms<=400 )))
    {
        call=((50*50)/100)+((100*70)/100)+(((totalCall-150)*85)/100);
        sms=50*0+((150*25)/100)+(((totalSms-200)*40)/100);
        Charge=call+sms; 
    }

    if((totalCall>300) && (totalSms>400))
    {
        call=((50*50)/100)+((100*70)/100)+((150*85)/100)+(((totalCall-300)*95)/100);
        sms=50*0+((150*25)/100)+((200*40)/100)+(((totalSms-400)*45)/100);
       Charge=call+sms;    
    }

    alert("Charges: "+ call+" "   +"\n"+ "Charges for sms: "+  sms+" "   +"\n"+ "Total Charges="+Charge+" ");
}