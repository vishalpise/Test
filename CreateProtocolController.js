"use strict";
var CreateProtocolApp = angular.module('CreateProtocolApp', ['CreateProtocolServiceModule']);
 var jsonheaders = { 'headers': { 'accept': 'application/json;odata=verbose' } };



 CreateProtocolApp.controller('CreateProtocolController', function ($scope,$http,$window,$rootScope,CreateProtocolService,$q){
    
  $scope.rbLanguages ='Spanish';
 var peoplePickerUsers =[]; 
 CreateProtocolService.getCurrentUser().then(function(response){
 					$scope.CurrentUser  = response.data.d.results;
 					
 					 		for (var i = 0; i < $scope.CurrentUser.length; i++) 
 					 		{    
				              var property = $scope.CurrentUser[i].Title; 
                              peoplePickerUsers.push(property);  
		       				}   
 		});

 CreateProtocolService.getSponsorMaster().then(function(response){
 					$scope.SponsorMaster = response.data.d.results;
 					 
 		});
 		
 		
 		 CreateProtocolService.getEmployeeMaster().then(function(response){
 					$scope.EmployeeMaster = response.data.d.results;
 					
 					 		});
 		
 		
  		$scope.EmpCode = "";
 		CreateProtocolService.getEmployeeCode(_spPageContextInfo.userId).then(function(response){
 					$scope.EmployeeCode = response.data.d.results;
 					
 		})
 		.then(function(response){
 					
			$scope.EmpCode = $scope.EmployeeCode[0].EmployeeID;
			 		});

 		
$scope.Block = function(){
				 
				 
				 angular.element($window).off('scroll', $scope.Cancel);
				 
				 }
 		
 		
$scope.Cancel = function(){
				 	$window.location="/sites/Protocol/SiteApplication/ProtocolDashboard.aspx";
}
 		
 		$scope.PerformeAction = function(){
 			$scope.SaveProtocol();
 		}
 		
 		$scope.Showconfirmation = function(){
 			 
 			 $scope.AlertMessage = "You want assign to Study Coordinator !";
 				$('#alertdeleteData').fadeIn();
 		
 		}
 		
 		// Save Protocol data on list
 		$scope.SaveProtocol = function(){
 		
 		var isValid = validateFields();
 		if(isValid){
 		for(var p = 0; p < $scope.SponsorMaster.length; p++){
 		if($scope.ngddlSponsorName == $scope.SponsorMaster[p].ID){
 		
 		$scope.SponsorName = $scope.SponsorMaster[p].SponsorName;
 		}
 		
 		}
 	
 		for (var i=0;i<$scope.EmployeeMaster.length;i++)
 		{
 		if($scope.ngddlVCP == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.VId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.VPCName = $scope.EmployeeMaster[i].EmployeeName;
 		
 		}
 		if($scope.ngddlSH == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.SHId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.SHName = $scope.EmployeeMaster[i].EmployeeName;
 		
 		}
		if($scope.ngddlSC == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.SCId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.SCName = $scope.EmployeeMaster[i].EmployeeName;
 		}
 		
 		if($scope.ngddlPI == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.PId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.PIName = $scope.EmployeeMaster[i].EmployeeName;
 		}
 		if($scope.ngddlPS == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.PSId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.PSName = $scope.EmployeeMaster[i].EmployeeName;
 		}
		if($scope.ngddlHOD == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.HId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.HODName = $scope.EmployeeMaster[i].EmployeeName;
 		}
			
	    if($scope.ngddlRM == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.RMId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.RMName = $scope.EmployeeMaster[i].EmployeeName;
 		}
 		if($scope.ngddlCPSR == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.CPSRId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.CPSRName = $scope.EmployeeMaster[i].EmployeeName;
 		}
		if($scope.ngddlBSR == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.BSId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.BSRName = $scope.EmployeeMaster[i].EmployeeName;
 		}
 		if($scope.ngddlQA == $scope.EmployeeMaster[i].ID)
 		{
 		$scope.QAId = $scope.EmployeeMaster[i].EmployeeID;
 		$scope.QAName = $scope.EmployeeMaster[i].EmployeeName;
 		}

 		}
 		
 			// : $scope.ngddlSC,
		// 		 ScreeningDepartmentHODCode: $scope.SCId,
		 //		 : $("#dtSC").val(),
 		
 		var ItemSave = 
 	             {
 	             ProtocolName : $scope.ngtxtProtocolName,
 	             Date : ($("#txtProtocolDate").val() ==""||typeof($("#txtProtocolDate").val())=="undefined" ? null : moment($("#txtProtocolDate").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
 	            SponsorType : $scope.ngddlSponsorType,
 	            SponsorName : $scope.SponsorName,
 	            VicsPresidentName : $scope.VPCName,
 	            VicsPresidentCode  : $scope.VId,
 	            StudyCoName :$scope.SCName,
 	            StudyCoCode : $scope.SCId,
 	            StudyCoDate :  ($("#dtSC").val() ==""||typeof($("#dtSC").val())=="undefined" ? null : moment($("#dtSC").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
 	          
 	           VicsPresidentDate :($("#dtVCP").val() ==""||typeof($("#dtVCP").val())=="undefined" ? null : moment($("#dtVCP").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 		ScreeningDepartmentHODName : $scope.SHName,
		 		ScreeningDepartmentHODCode : $scope.SHId,
		 		//ScreeningDepartmentHODDate : $("#dtSH").val(),
		 		ScreeningDepartmentHODDate :($("#dtSH").val() ==""||typeof($("#dtSH").val())=="undefined" ? null : moment($("#dtSH").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 		
		 	    PIName : $scope.PIName, 	
               	PICode : $scope.PId,
               	PIDate :($("#dtPI").val() ==""||typeof($("#dtPI").val())=="undefined" ? null : moment($("#dtPI").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 	  
		 		PharmaStatsName : $scope.PSName,
		 		PharmaStatsCode : $scope.PSId,
		 		//PharmaStatsDate: $("#dtPS").val(),
		 		PharmaStatsDate :($("#dtPS").val() ==""||typeof($("#dtPS").val())=="undefined" ? null : moment($("#dtPS").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 	  
		 		BiHODName : $scope.HODName,
		 		BiHODCode : $scope.HId,
		 		//BiHODDate : $("#dtHOD").val(),
		 		BiHODDate :($("#dtHOD").val() ==""||typeof($("#dtHOD").val())=="undefined" ? null : moment($("#dtHOD").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 	  //	CurrentApproval : $scope.CurrentUser,
		 		RMName : $scope.RMName,
		 		RMCode : $scope.RMId,
		 		//RMDate: $("#dtRM").val(),
		 		RMDate :($("#dtRM").val() ==""||typeof($("#dtRM").val())=="undefined" ? null : moment($("#dtRM").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 		ClnPharmaSanitaryResponsibleName : $scope.CPSRName,
		 		ClnPharmaSanitaryResponsibleCode : $scope.CPSRId,
		 		//ClnPharmaSanitaryResponsibleDate : $("#dtCPSR").val(),
		 		ClnPharmaSanitaryResponsibleDate:($("#dtCPSR").val() ==""||typeof($("#dtCPSR").val())=="undefined" ? null : moment($("#dtCPSR").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 		BiSanitaryResponsibleName : $scope.BSRName,
		 		BiSanitaryResponsibleCode : $scope.BSId,
		 		//BiSanitaryResponsibleDate : $("#dtBSR").val(),
		 		BiSanitaryResponsibleDate:($("#dtBSR").val() ==""||typeof($("#dtBSR").val())=="undefined" ? null : moment($("#dtBSR").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 		QAHODName: $scope.QAName,
		 		QAHODCode : $scope.QAId,
		 		//QAHODDate : $("#dtQA").val(),
		 		QAHODDate :($("#dtQA").val() ==""||typeof($("#dtQA").val())=="undefined" ? null : moment($("#dtQA").val(),"MM/DD/YYYY").format("MM/DD/YYYY")),
		 		Remark :$scope.ngtxtRemark,
		 		Language :$scope.rbLanguages,
		 		CreatedCode :$scope.EmpCode,

 	             
 	             }
 	             
 	             
 	             // Get WorkFlot
 	              CreateProtocolService.getWorkFlow()
 	              .then(function(response){
 					$scope.WorkFlow = response.data.d.results;
 					 
 					var array = $scope.WorkFlow[0].ReviewName.ReviewBy.split(",");
 					 
 					var CurrentUser = "";
 					 for(var i = 0 ; i < array.length; i++){
 					 						
 					 var proname = array[i];
 					 
	 					 if(proname == "StudyCoCode"){
	 					 CurrentUser = CurrentUser + ItemSave.StudyCoCode + " , ";
	 					 }
 					 
 					 }
 					 
 					 $scope.CurrentUser = CurrentUser;
 					 
 					ItemSave["CurrentApproval"] = CurrentUser ;
 					ItemSave["StatusId"] = $scope.WorkFlow[0].ToStatusId;
					ItemSave["InternalStatus"] = $scope.WorkFlow[0].InternalStatus;
 				   })
 				   .then(function(response){
 				  
 				  			if($scope.WorkFlow.length > 0){
 				   					$('#loaderSuccessData').show();
 									var deferred = $q.defer();
									CreateProtocolService.SaveProtocol(ItemSave).then(function (response) {
											 deferred.resolve(response);
											 
										});
 									return deferred.promise; 
 							}	
 				   })
 				   .then(function(response){
 				   console.log("his")
 				   console.log(response.data.d.ID);
		 				   if(response.status == 201){
		 				   
		 				   var itemsHistory = {
		 				   FromStatusId : $scope.WorkFlow[0].FromStatusId,
		 				   ToStatusId : $scope.WorkFlow[0].ToStatusId,
		 				   ActionById : _spPageContextInfo.userId,
		 				   ProtocolIDId : response.data.d.ID,
		 				   Remark : $scope.ngtxtRemark,
		 				   }
		 				   
		 				   CreateProtocolService.SaveHistory(itemsHistory).then(function (response) {
											 
											 
										});

		 				   
		 				   
		 				   }
 				   
 				   })
 				   .then(function(response){
 					 
 					$(".loader").fadeOut('fast');
 					$(".loaderContainer").fadeIn();

 					
					$window.location="/sites/Protocol/SiteApplication/ProtocolDashboard.aspx";

 				   });


					
 		
 					console.log("Run after function");
					 
 		}
 		}
 		
 		
////////Validation/////////



function validateFields() {

       clearErrorClass();
      
        var retval = true;
        try {
			
			if ($scope.ngtxtProtocolName == "" || typeof($scope.ngtxtProtocolName) === "undefined") {
                
                $('#txtProtocolName').parent().append("<label class='error'>" + "Please Enter Protocol Name" + "</label>");
                $('#txtProtocolName').focus();
                retval = false;
                return false;
            }
           
         	  if ($scope.ngtxtProtocolDate == "" || typeof($scope.ngtxtProtocolDate) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker1').parent().append("<label class='error'>" + "Enter Date" + "</label>");
                $('#datetimepicker1').focus();
                retval = false;
                return false;
            }
            
            
               if ($scope.ngddlSponsorType == "" || typeof($scope.ngddlSponsorType) === "undefined") {
                
                $('#ddlSponsorType').parent().append("<label class='error'>" + "Please Select Sponsor Type " + "</label>");
                $('#ddlSponsorType').focus();
                retval = false;
                return false;
            }
            
              if ($scope.ngddlSponsorName == "" || typeof($scope.ngddlSponsorName) === "undefined") {
                
                $('#ddlSponsorName').parent().append("<label class='error'>" + "Please Select Sponsor Name " + "</label>");
                $('#ddlSponsorName').focus();
                retval = false;
                return false;
            }

				if($scope.ngddlSponsorType == "National" && $scope.rbLanguages == "English" )
			{
			
                $('#rb').parent().append("<label class='error'>" + "Please Select Spanish" + "</label>");
                $('#rb').focus();
                retval = false;
                return false;
			}
				if($scope.ngddlSponsorType == "International" && $scope.rbLanguages == "Spanish" )
			{
			
                $('#rb').parent().append("<label class='error'>" + "Please Select English" + "</label>");
                $('#rb').focus();
                retval = false;
                return false;
			}

             if ($scope.ngddlVCP == "" || typeof($scope.ngddlVCP) === "undefined") {
                
                $('#ddlVCP').parent().append("<label class='error'>" + "Please Select VCP" + "</label>");
                $('#ddlVCP').focus();
                retval = false;
                return false;
            }
			
			
			  if ($scope.ngdtVCP == "" || typeof($scope.ngdtVCP) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker2').parent().append("<label class='error'>" + "Enter VCP Date" + "</label>");
                $('#datetimepicker2').focus();
                retval = false;
                return false;
            }
            
            if ($scope.ngddlSH == "" || typeof($scope.ngddlSH) === "undefined") {
                
                $('#ddlSH').parent().append("<label class='error'>" + "Please Select SH" + "</label>");
                $('#ddlSH').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtSH == "" || typeof($scope.ngdtSH) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker3').parent().append("<label class='error'>" + "Enter SH Date" + "</label>");
                $('#datetimepicker3').focus();
                retval = false;
                return false;
            }
            
            if ($scope.ngddlSC == "" || typeof($scope.ngddlSC) === "undefined") {
                
                $('#ddlSC').parent().append("<label class='error'>" + "Please Select SC" + "</label>");
                $('#ddlSC').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtSC == "" || typeof($scope.ngdtSC) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker4').parent().append("<label class='error'>" + "Enter SC Date" + "</label>");
                $('#datetimepicker4').focus();
                retval = false;
                return false;
            }
            
            
            
             if ($scope.ngddlPI == "" || typeof($scope.ngddlPI) === "undefined") {
                
                $('#ddlPI').parent().append("<label class='error'>" + "Please Select PI" + "</label>");
                $('#ddlPI').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtPI == "" || typeof($scope.ngdtPI) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker5').parent().append("<label class='error'>" + "Enter PI Date" + "</label>");
                $('#datetimepicker5').focus();
                retval = false;
                return false;
            }
            

			 if ($scope.ngddlPS == "" || typeof($scope.ngddlPS) === "undefined") {
                
                $('#ddlPS').parent().append("<label class='error'>" + "Please Select PS" + "</label>");
                $('#ddlPS').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtPS == "" || typeof($scope.ngdtPS) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker6').parent().append("<label class='error'>" + "Enter PS Date" + "</label>");
                $('#datetimepicker6').focus();
                retval = false;
                return false;
            }
				
			 if ($scope.ngddlHOD == "" || typeof($scope.ngddlHOD) === "undefined") {
                
                $('#ddlHOD').parent().append("<label class='error'>" + "Please Select HOD" + "</label>");
                $('#ddlHOD').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtHOD == "" || typeof($scope.ngdtHOD) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker7').parent().append("<label class='error'>" + "Enter HOD Date" + "</label>");
                $('#datetimepicker7').focus();
                retval = false;
                return false;
            }
            
            
             if ($scope.ngddlRM == "" || typeof($scope.ngddlRM) === "undefined") {
                
                $('#ddlRM').parent().append("<label class='error'>" + "Please Select RM" + "</label>");
                $('#ddlRM').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtRM == "" || typeof($scope.ngdtRM) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker8').parent().append("<label class='error'>" + "Enter RM Date" + "</label>");
                $('#datetimepicker8').focus();
                retval = false;
                return false;
            }
				
			 
             if ($scope.ngddlCPSR == "" || typeof($scope.ngddlCPSR) === "undefined") {
                
                $('#ddlCPSR').parent().append("<label class='error'>" + "Please Select CPSR" + "</label>");
                $('#ddlCPSR').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtCPSR == "" || typeof($scope.ngdtCPSR) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker9').parent().append("<label class='error'>" + "Enter CPSR Date" + "</label>");
                $('#datetimepicker9').focus();
                retval = false;
                return false;
            }
			
			 if ($scope.ngddlBSR == "" || typeof($scope.ngddlBSR) === "undefined") {
                
                $('#ddlBSR').parent().append("<label class='error'>" + "Please Select BSR" + "</label>");
                $('#ddlBSR').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtBSR == "" || typeof($scope.ngdtBSR) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker10').parent().append("<label class='error'>" + "Enter BSR Date" + "</label>");
                $('#datetimepicker10').focus();
                retval = false;
                return false;
            }


			if ($scope.ngddlQA == "" || typeof($scope.ngddlQA) === "undefined") {
                
                $('#ddlQA').parent().append("<label class='error'>" + "Please Select QA" + "</label>");
                $('#ddlQA').focus();
                retval = false;
                return false;
            }
            
             if ($scope.ngdtQA == "" || typeof($scope.ngdtQA) === "undefined") {
                
               document.getElementById("loaderSuccessData").style.display = "none";
               $('#datetimepicker11').parent().append("<label class='error'>" + "Enter QA Date" + "</label>");
                $('#datetimepicker11').focus();
                retval = false;
                return false;
            }
			
			
			
			if ($scope.ngtxtRemark == "" || typeof($scope.ngtxtRemark) === "undefined") {
                
                $('#txtRemark').parent().append("<label class='error'>" + "Please Enter Remark" + "</label>");
                $('#txtRemark').focus();
                retval = false;
                return false;
            }

			
            

            
            
            
            
            
            
     
            return retval;
        }
        catch (err) {
            console.log(err.message);
            retval = false;
             
        }

    }
    
  function clearErrorClass() {
    $('label.error').remove();
	}




});