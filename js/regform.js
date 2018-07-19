$(function(){
 $("#regform").validate({
     rules:{
         usn:{
             required:true,
             minlength:10,
             maxlength:10,
         },
         name:{
              required:true,
               
     },
         email:{
             required:true,
         
     },
     mobile:{
            required:true,
         
      },
        course:{
               required:true,
                        
               },
        percentage:{ 
                  required:true,
                      
        },
         
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
                courses:{
                        
                        },
                percentage:{
                    
                },        
                        }
 });
});