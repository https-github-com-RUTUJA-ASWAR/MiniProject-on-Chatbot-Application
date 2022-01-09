function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
   else if (input == "What is the timing to open the library?") {
        return "Libray is open at 11O'clock and it will close at 5O'clock.";
    } 
	else if(input == "Is the robotic lab open on weekends?") 
	{
		return "No,robotic lab is open only from Monday to Friday.";
	}
	else if(input == "Do we have a sports week in our college?")
	{
		return "Yes,we have a sports week in our college in a month of February.";
	}
	else if(input == "How many branches are there in our College?")
	{
		return "There are total 6 branches Civil engineering, Computer science engineering,Information technology, Electrical engineering,mechanical engineering,Electronics and Telecommunication engineering";
	}
	else if(input == "When do the end examination starts?")
	{
		return "End examination are going toh start from 3rd January.";
	}
	else if(input == "What is GECA MUN club?")
	{
		return "Geca mun club is an initiative of the student of geca that works on the moto of Engage,Encourage,empower.";
	}
	else if(input == "What is the exam registration fee of ESE NOV-DEC?")
	{
		return "Exam registration fee of ESE NOV-DEC is Rs 1,250.";
	}
	else if(input == "Who is the president of student council?")
	{
		return "Roshan patil,4th year CSE student.";
	}
	else if(input == "How many clubs are there in our college?")
	{
		return "There are many clubs in our college like light samvdena club,Entrepreneurship Development cell, GECA MUN club.";
	}
	else if(input == "Can I pay fees in installation?")
	{
		return "Yes,you can pay the fees in two installments.";
	}
	else if(input == "Do we have any college magazine?")
	{
		return "We have our annual college magzine Catalyst";
	}
	else if(input == "How do I sign up for the basketball club?")
	{
		return "Contact to Santosh Atipamlu sir for signing up in basketball club.";
	}
	else if(input == "Do We have any technical event in our college?")
	{
		return "We have a technical event in our college name as Wings.";
	}
	else if (input == "How to check fee payment receipt?") {
        return "login into mis portal and go to transaction section to check the fee payment receipt";
	    } 
	else if (input == "Thank you") {
        return "Most Welcome!";
	    } 
	else if (input == "Good Bye") {
        return "Talk to you later!";
	    } 
	else {
        return "Try asking something else!";
    }
}