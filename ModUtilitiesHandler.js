
app.service('ModUtilitiesHandler',function(ajaxService){
var constants = {
         'PORT':'8080',
          'URL':'localhost',
         'PROTOCOL': 'http'
         };

   this.getnetusername=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//getnetusername",successFunction,errorFunction);
}
   this.pmadmember=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//pmadmember",successFunction,errorFunction);
}
   this.newbizmember=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//newbizmember",successFunction,errorFunction);
}
   this.finsvcsmember=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//finsvcsmember",successFunction,errorFunction);
}
   this.adminmember=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//adminmember",successFunction,errorFunction);
}
   this.forcenav=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//forcenav",successFunction,errorFunction);
}
   this.forcedollar=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//forcedollar",successFunction,errorFunction);
}
   this.centerform=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//centerform",successFunction,errorFunction);
}
   this.decimalpointexist=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//decimalpointexist",successFunction,errorFunction);
}
   this.opendatabase=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//opendatabase",successFunction,errorFunction);
}
   this.dateformodel=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//dateformodel",successFunction,errorFunction);
}
});