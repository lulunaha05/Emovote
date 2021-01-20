var register = angular.module("register",["ngStorage"]);

register.run(function($rootScope){
$rootScope.ActionDisable = false;
$rootScope.RomanceDisable = false;
$rootScope.FantasyDisable = false;
$rootScope.ScifiDisable = false;
$rootScope.ThrillerDisable = false;
$rootScope.HorrorDisable = false;
$rootScope.Login = false;
$rootScope.Logout = false;
$rootScope.Namalogin = '';
// Action 
$rootScope.VoteAction1=0;
localStorage.setItem("VoteAction1",$rootScope.VoteAction1)
$rootScope.VoteAction2=0;
localStorage.setItem("VoteAction2",$rootScope.VoteAction2)
$rootScope.VoteAction3=0;
localStorage.setItem("VoteAction3",$rootScope.VoteAction3)
//<!-- Romance -->
$rootScope.VoteRomance1=0;
localStorage.setItem("VoteRomance1",$rootScope.VoteRomance1)
$rootScope.VoteRomance2=0;
localStorage.setItem("VoteRomance2",$rootScope.VoteRomance2)
$rootScope.VoteRomance3=0;
localStorage.setItem("VoteRomance3",$rootScope.VoteRomance3)
//<!-- Fantasy -->
$rootScope.VoteFantasy1=0;
localStorage.setItem("VoteFantasy1",$rootScope.VoteFantasy1)
$rootScope.VoteFantasy2=0;
localStorage.setItem("VoteFantasy2",$rootScope.VoteFantasy2)
$rootScope.VoteFantasy3=0;
localStorage.setItem("VoteFantasy3",$rootScope.VoteFantasy3)
//<!-- Scifi -->
$rootScope.VoteScifi1=0;
localStorage.setItem("VoteScifi1",$rootScope.VoteScifi1)
$rootScope.VoteScifi2=0;
localStorage.setItem("VoteScifi2",$rootScope.VoteScifi2)
$rootScope.VoteScifi3=0;
localStorage.setItem("VoteScifi3",$rootScope.VoteScifi3)
//<!-- Thriller -->
$rootScope.VoteThriller1=0;
localStorage.setItem("VoteThriller1",$rootScope.VoteThriller1)
$rootScope.VoteThriller2=0;
localStorage.setItem("VoteThriller2",$rootScope.VoteThriller2)
$rootScope.VoteThriller3=0;
localStorage.setItem("VoteThriller3",$rootScope.VoteThriller3)
//<!-- Horror -->
$rootScope.VoteHorror1=0;
localStorage.setItem("VoteHorror1",$rootScope.VoteHorror1)
$rootScope.VoteHorror2=0;
localStorage.setItem("VoteHorror2",$rootScope.VoteHorror2)
$rootScope.VoteHorror3=0;
localStorage.setItem("VoteHorror3",$rootScope.VoteHorror3)
});

register.controller("myCtrl",function($scope,$localStorage){
	
	$scope.obj = {
		nama: '',
		email: '',
		password: '',
		confirmpassword:'', 
		number : ''
	};
	
	var originalObj = angular.copy($scope.obj);

	$scope.saveData = function(){
		var existingEntries = JSON.parse(localStorage.getItem("allEntries"))
		if(existingEntries == null) existingEntries = [];
			var myObj =[{
			nama : $scope.myObj.nama,
			email : $scope.myObj.email,
			password : $scope.myObj.password,
			number : $scope.myObj.number
		}]
		localStorage.setItem('myObj',JSON.stringify(myObj))
		existingEntries.push(myObj);
		localStorage.setItem("allEntries",JSON.stringify(existingEntries));
		$scope.resetform();
		alert('Selamat anda telah Registrasi di E-MoVoting');
	};
	
	$scope.resetform = function()  {
		$scope.myObj = angular.copy(originalObj);
		$scope.registerform.$setPristine();
		
	};

	
});

register.controller ("ActionCtrl",function($rootScope,$scope,$localStorage){
	
	var VoteAction1 = 0
	var VoteAction2 = 0
	var VoteAction3 = 0

	$scope.voteaction1 = function(){
		VoteAction1 = VoteAction1 + 1		
		localStorage.setItem("VoteAction1",VoteAction1)
		alert('Vote Anda Telah Terdaftar');
		$scope.updateaction1();
		$rootScope.ActionDisable = true
	}
	$scope.voteaction2 = function(){
		VoteAction2 = VoteAction2 + 1
		localStorage.setItem("VoteAction2",VoteAction2)
		alert('Vote Anda Telah Terdaftar');
		$scope.updateaction2();
		$rootScope.ActionDisable = true
	}
	$scope.voteaction3 = function(){
		VoteAction3 = VoteAction3 + 1
		localStorage.setItem("VoteAction3",VoteAction3)
		alert('Vote Anda Telah Terdaftar');
		$scope.updateaction3();
		$rootScope.ActionDisable = true
	}
	
	var ctx = document.getElementById("ActionChart").getContext('2d');
	var ActionChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Film1", "Film2", "Film3"],
        datasets: [{
            label: "Votes Count",
            data: [0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',  
            ],
            borderColor: [
                'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
	});
	
	$scope.updateaction1 = function(){
		ActionChart.data.datasets[0].data[0] = VoteAction1;
		ActionChart.update();
	}
	$scope.updateaction2 = function(){
		ActionChart.data.datasets[0].data[1] = VoteAction2;
		ActionChart.update();
	}
	$scope.updateaction3 = function(){
		ActionChart.data.datasets[0].data[2] = VoteAction3;
		ActionChart.update();
	}
	
});

register.controller ("RomanceCtrl",function($rootScope,$scope,$localStorage){
	var VoteRomance1 = 0
	var VoteRomance2 = 0
	var VoteRomance3 = 0
	
	$scope.voteromance1 = function(){
		VoteRomance1 = VoteRomance1 + 1		
		localStorage.setItem("VoteRomance1",VoteRomance1)
		alert(location.host,'Vote Anda Telah Terdaftar ')
		$scope.updateromance1();
		$rootScope.RomanceDisable = true
	}
	$scope.voteromance2 = function(){
		VoteRomance2 = VoteRomance2 + 1
		localStorage.setItem("VoteRomance2",VoteRomance2)
		alert('Vote Anda Telah Terdaftar')
		$scope.updateromance2();
		$rootScope.RomanceDisable = true
		
	}
	$scope.voteromance3 = function(){
		VoteRomance3 = VoteRomance3 + 1
		localStorage.setItem("VoteRomance3",VoteRomance3)
		alert('Vote Anda Telah Terdaftar')
		$scope.updateromance3();
		$rootScope.RomanceDisable = true
	}
	
	var ctx = document.getElementById("RomanceChart").getContext('2d');
	var RomanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Film1", "Film2", "Film3"],
        datasets: [{
            label: "Votes Count",
            data: [0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',  
            ],
            borderColor: [
                'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
	});
	
	$scope.updateromance1 = function(){
		RomanceChart.data.datasets[0].data[0] = VoteRomance1;
		RomanceChart.update();
	}
	$scope.updatromance2 = function(){
		RomanceChart.data.datasets[0].data[1] = VoteRomance2;
		RomanceChart.update();
	}
	$scope.updateromance3 = function(){
		RomanceChart.data.datasets[0].data[2] = VoteRomance3;
		RomanceChart.update();
	}
	
});

register.controller ("FantasyCtrl",function($rootScope,$scope,$localStorage){
	var VoteFantasy1 = 0
	var VoteFantasy2 = 0
	var VoteFantasy3 = 0
	
	$scope.votefantasy1 = function(){
		VoteFantasy1 = VoteFantasy1 + 1		
		localStorage.setItem("VoteFantasy1",VoteFantasy1)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatefantasy1();
		$rootScope.FantasyDisable = true
	}
	$scope.votefantasy2 = function(){
		VoteFantasy2 = VoteFantasy2 + 1
		localStorage.setItem("VoteFantasy2",VoteFantasy2)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatefantasy2();
		$rootScope.FantasyDisable = true
		
	}
	$scope.votefantasy3 = function(){
		VoteFantasy3 = VoteFantasy3 + 1
		localStorage.setItem("VoteFantasy3",VoteFantasy3)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatefantasy3();
		$rootScope.FantasyDisable = true
	}
	
	var ctx = document.getElementById("FantasyChart").getContext('2d');
	var FantasyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Film1", "Film2", "Film3"],
        datasets: [{
            label: "Votes Count",
            data: [0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',  
            ],
            borderColor: [
                'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
	});
	
	$scope.updatefantasy1 = function(){
		FantasyChart.data.datasets[0].data[0] = VoteFantasy1;
		FantasyChart.update();
	}
	$scope.updatefantasy2 = function(){
		FantasyChart.data.datasets[0].data[1] = VoteFantasy2;
		FantasyChart.update();
	}
	$scope.updatefantasy3 = function(){
		FantasyChart.data.datasets[0].data[2] = VoteFantasy3;
		FantasyChart.update();
	}
	
});

register.controller ("ScifiCtrl",function($rootScope,$scope,$localStorage){
	var VoteScifi1 = 0
	var VoteScifi2 = 0
	var VoteScifi3 = 0
	
	$scope.votescifi1 = function(){
		VoteScifi1 = VoteScifi1 + 1		
		localStorage.setItem("VoteScifi1",VoteScifi1)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatescifi1();
		$rootScope.ScifiDisable = true

	}
	$scope.votescifi2 = function(){
		VoteScifi2 = VoteScifi2 + 1
		localStorage.setItem("VoteScifi2",VoteScifi2)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatescifi2();
		$rootScope.ScifiDisable = true
		
	}
	$scope.votescifi3 = function(){
		VoteScifi3 = VoteScifi3 + 1
		localStorage.setItem("VoteScifi3",VoteScifi3)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatescifi3();
		$rootScope.ScifiDisable = true
	}
	
	var ctx = document.getElementById("ScifiChart").getContext('2d');
	var ScifiChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Film1", "Film2", "Film3"],
        datasets: [{
            label: "Votes Count",
            data: [0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',  
            ],
            borderColor: [
                'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
	});
	
	$scope.updatescifi1 = function(){
		ScifiChart.data.datasets[0].data[0] = VoteScifi1;
		ScifiChart.update();
	}
	$scope.updatescifi2 = function(){
		ScifiChart.data.datasets[0].data[1] = VoteScifi2;
		ScifiChart.update();
	}
	$scope.updatescifi3 = function(){
		ScifiChart.data.datasets[0].data[2] = VoteScifi3;
		ScifiChart.update();
	}
	
});


register.controller ("HorrorCtrl",function($rootScope,$scope,$localStorage){
	var VoteHorror1 = 0
	var VoteHorror2 = 0
	var VoteHorror3 = 0
	
	$scope.votehorror1 = function(){
		VoteHorror1 = VoteHorror1 + 1		
		localStorage.setItem("VoteHorror1",VoteHorror1)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatehorror1();
		$rootScope.HorrorDisable = true
	}
	$scope.votehorror2 = function(){
		VoteHorror2 = VoteHorror2 + 1
		localStorage.setItem("VoteHorror2",VoteHorror2)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatehorror2();
		$rootScope.HorrorDisable = true
		
	}
	$scope.votehorror3 = function(){
		VoteHorror3 = VoteHorror3 + 1
		localStorage.setItem("VoteHorror3",VoteHorror3)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatehorror3();
		$rootScope.HorrorDisable = true
	}
	
	var ctx = document.getElementById("HorrorChart").getContext('2d');
	var HorrorChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Film1", "Film2", "Film3"],
        datasets: [{
            label: "Votes Count",
            data: [0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',  
            ],
            borderColor: [
                'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
	});
	
	$scope.updatehorror1 = function(){
		HorrorChart.data.datasets[0].data[0] = VoteHorror1;
		HorrorChart.update();
	}
	$scope.updatehorror2 = function(){
		HorrorChart.data.datasets[0].data[1] = VoteHorror2;
		HorrorChart.update();
	}
	$scope.updatehorror3 = function(){
		HorrorChart.data.datasets[0].data[2] = VoteHorror3;
		HorrorChart.update();
	}
	
});

register.controller ("ThrillerCtrl",function($rootScope,$scope,$localStorage){
	var VoteThriller1 = 0
	var VoteThriller2 = 0
	var VoteThriller3 = 0
	
	$scope.votethriller1 = function(){
		VoteThriller1 = VoteThriller1 + 1		
		localStorage.setItem("VoteThriller1",VoteThriller1)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatethriller1();
		$rootScope.ThrillerDisable = true
	}
	$scope.votethriller2 = function(){
		VoteThriller2 = VoteThriller2 + 1
		localStorage.setItem("VoteThriller2",VoteThriller2)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatethriller2();
		$rootScope.ThrillerDisable = true		
	}
	$scope.votethriller3 = function(){
		VoteThriller3 = VoteThriller3 + 1
		localStorage.setItem("VoteThriller3",VoteThriller3)
		alert('Vote Anda Telah Terdaftar')
		$scope.updatethriller3();
		$rootScope.ThrillerDisable = true
	}
	
	var ctx = document.getElementById("ThrillerChart").getContext('2d');
	var ThrillerChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Film1", "Film2", "Film3"],
        datasets: [{
            label: "Votes Count",
            data: [0,0,0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 99, 132, 0.2)',  
            ],
            borderColor: [
                'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
	});
	
	$scope.updatethriller1 = function(){
		ThrillerChart.data.datasets[0].data[0] = VoteThriller1;
		ThrillerChart.update();
	}
	$scope.updatethriller2 = function(){
		ThrillerChart.data.datasets[0].data[1] = VoteThriller2;
		ThrillerChart.update();
	}
	$scope.updatethriller3 = function(){
		ThrillerChart.data.datasets[0].data[2] = VoteThriller3;
		ThrillerChart.update();
	}
});

register.controller("loginCtrl",function($scope,$localStorage,$rootScope){
	$scope.submit = function(){
		var email = $scope.email;
		var password = $scope.password;

		var allEntries= localStorage.getItem("allEntries");
		console.log(localStorage.getItem("allEntries"));

		$scope.obj = {
			email: '',
			password: '',
		};
		
		var originalObj = angular.copy($scope.obj);

		for(i=0; i< allEntries.length; i++){
			if(angular.equals(allEntries[i].email,email) && angular.equals(allEntries[i].password,password) ){
			 	$rootScope.Login = true
			 	$rootScope.Logout = true
			 	$rootScope.Namalogin = allEntries[i].nama
			}
			else{
				console.log(false)
				$rootScope.Namalogin = allEntries[i].nama
			}
		}


	}
});

register.controller("LogoutCtrl",function($scope,$localStorage,$rootScope){
	
	$scope.logout = function(){
	alert('Logout Sukses');
	$rootScope.ActionDisable = false
	$rootScope.RomanceDisable = false
	$rootScope.FantasyDisable = false
	$rootScope.ScifiDisable = false
	$rootScope.ThrillerDisable = false;
	$rootScope.HorrorDisable = false
	$rootScope.Login = false
	$rootScope.Logout = false
	}
	
});