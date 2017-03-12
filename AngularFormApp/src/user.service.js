(function(){
    angular.module('angApp')
            .service('userService',userService);

    function userService(){
        var uid=1;

        var details=[{
            id:0,
            'firstName':'Sid',
            'lastName':'gauti',
            'email':'sid@gmail.com',
            'city':'hyd',
            'company':'marlabs'
        }]

        this.update=function(detail){
            if(detail.id==null){
                detail.id=uid++;
                details.push(detail);
            }else{
                for(i in details){
                    if(details[i].id==detail.id){
                        details[i]=detail;
                    }
                }
            }
        }

        this.get=function(id){
            for(i in details){
                if(details[i].id==id){
                    return details[i];
                }
            }
        }    

        this.list=function(){
            return details;
        }
    }
})();