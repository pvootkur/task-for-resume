
app.service('FrmNonSFGheldFundsHandler',function(ajaxService){
var constants = {
         'PORT':'8080',
          'URL':'localhost',
         'PROTOCOL': 'http'
         };

   this.populateassetclasscombo=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//populateassetclasscombo",successFunction,errorFunction);
}
   this.populatefunds=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//populatefunds",successFunction,errorFunction);
}
   this.popassetclasscombowithunassigned=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//popassetclasscombowithunassigned",successFunction,errorFunction);
}
   this.makeunassignedastext=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//makeunassignedastext",successFunction,errorFunction);
}
   this.selectassetclass=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//selectassetclass",successFunction,errorFunction);
}
   this.cboassetclasschange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cboassetclasschange",successFunction,errorFunction);
}
   this.cboassetclassclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cboassetclassclick",successFunction,errorFunction);
}
   this.cbofundschange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cbofundschange",successFunction,errorFunction);
}
   this.cbofundsclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cbofundsclick",successFunction,errorFunction);
}
   this.cboselassetclassclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cboselassetclassclick",successFunction,errorFunction);
}
   this.cmdclearclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdclearclick",successFunction,errorFunction);
}
   this.cmdcloseclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdcloseclick",successFunction,errorFunction);
}
   this.getsfgfundnames=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//getsfgfundnames",successFunction,errorFunction);
}
   this.cmddeleteclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmddeleteclick",successFunction,errorFunction);
}
   this.duplicatecusip=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//duplicatecusip",successFunction,errorFunction);
}
   this.savechanges=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//savechanges",successFunction,errorFunction);
}
   this.cmdsaveclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdsaveclick",successFunction,errorFunction);
}
   this.populatefunddetails=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//populatefunddetails",successFunction,errorFunction);
}
   this.cmdselfundclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//cmdselfundclick",successFunction,errorFunction);
}
   this.enabledisablecontrols=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//enabledisablecontrols",successFunction,errorFunction);
}
   this.formload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formload",successFunction,errorFunction);
}
   this.formunload=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//formunload",successFunction,errorFunction);
}
   this.optfilterbyassetclassclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//optfilterbyassetclassclick",successFunction,errorFunction);
}
   this.optshowallclick=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//optshowallclick",successFunction,errorFunction);
}
   this.txtcusipchange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtcusipchange",successFunction,errorFunction);
}
   this.txtcusipkeypress=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtcusipkeypress",successFunction,errorFunction);
}
   this.txtnamechange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txtnamechange",successFunction,errorFunction);
}
   this.txttickersymbolchange=function(itemData,successFunction,errorFunction){
       ajaxService.AjaxGetWithData("constants.'PROTOCOL'//constants.'URL':constants.'PORT'//txttickersymbolchange",successFunction,errorFunction);
}
});