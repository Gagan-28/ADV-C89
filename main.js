Teacher_name= "Mamata Bhuyan", "Madhuri Bharali", "Unni Priya", "Sudibiya", "Juli Das", "Munmun Dutta", "SNSingh", "Mithu Mallik", "Purushottam Bharadwaj", "SK Mishra", "Nazrul Islam Ahmed", "Naimuddin Islam Ahmed", "Ayindrela Bhowmick";

Teacher_password = "APSNteacher@0101";

Enter_name = document.getElementById("enter_your_name").value;

Enter_password = document.getElementById("password").value;

function addUser()
{
    if(Enter_name == Teacher_name && Enter_password == Teacher_password)
    {
        localStorage.setItem("enter_your_name", Teacher_name)
        window.location = "Teacher/teacher.html";
    }
}