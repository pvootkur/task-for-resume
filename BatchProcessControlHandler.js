
app.service('BatchProcessControlHandler',function(ajaxService){
var constants = {
         'PORT':'8080',
          'URL':'localhost',
         'PROTOCOL': 'http'
         };

   this.cmdqueryclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdqueryclick",successFunction,errorFunction);
}
   this.cmdrefreshclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdrefreshclick",successFunction,errorFunction);
}
   this.formload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formload",successFunction,errorFunction);
}
   this.formatdatagrid=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formatdatagrid",successFunction,errorFunction);
}
   this.mshflexgrid1dragdrop=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//mshflexgrid1dragdrop",successFunction,errorFunction);
}
   this.mshflexgrid1mousedown=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//mshflexgrid1mousedown",successFunction,errorFunction);
}
   this.mshflexgrid1mousemove=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//mshflexgrid1mousemove",successFunction,errorFunction);
}
   this.mshflexgrid1mouseup=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//mshflexgrid1mouseup",successFunction,errorFunction);
}
   this.mshflexgrid1dblclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//mshflexgrid1dblclick",successFunction,errorFunction);
}
   this.docolumnsort=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//docolumnsort",successFunction,errorFunction);
}
   this.formresize=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formresize",successFunction,errorFunction);
}
   this.cmdcloseclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdcloseclick",successFunction,errorFunction);
}
});