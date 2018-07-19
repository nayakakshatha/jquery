$(function(){
    $(".submit").click(function(){
var isValid= $("#regform").validate({
     rules:{
         usn:{
             required:true,
            
         },
         name:{
              required:true,
              minlength:2,
              maxlength:50,
     },
         email:{
             required:true,
             email:true,
     },
     mobile:{
            required:true,
            minlength:10,
             maxlength:10,
      },
         coures:{
             required:true,
         },
        
                        
        percentage:{ 
                  required:true,
                  min:55,
                max:100,
        }
         
     },
    
        messages:{
                usn:{
                     required:"USN can't be empty"
                    
                        },
                name:{
                     required:"Name can't be empty"
                        },
                email:{
                       required:"email can't be empty"
                        
                        },
                mobile:{
                       required:"mobile no. can't be empty"
                        
                        }, 
             coure:{ 
                  required:"course can't be empty"
                  },
               
                percentage:{
                    required:"percentage can't be empty",
                    min :"below 55 can not eligible",
                    max:"eligible"
                }        
                        }
 }).form();
        if(isValid){
            var usn = $("#usn").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var mobile = $("#mobile").val();
            var course = $("#course").val();
            var percentage = $("#percentage").val();
                             $(".reset").click();
            
            student = {
                "usn":usn,
                "name":name,
                "email":email,
                "mobile":mobile,
                "course":course,
                "percentage":percentage
            }
            
            console.log(student);
            
            return false;
        }
    });
});