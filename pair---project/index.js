
     
        var modal = $('.modal')
        var overlay = $('.overlay')
        var close = $('.close-modal')
        var open = $('.show-modal')
        var levelButtons = $('#level button')
    
      
        function openModal() {
            $(".Answerstyle").empty()
            
            modal.removeClass('hidden') 
            overlay.removeClass('hidden')
        }
    
        function closeModal() {
            modal.addClass('hidden')
            overlay.addClass('hidden')
            $('#num').val("")
        }
    
        open.on('click', openModal)
        close.on('click', closeModal)
        overlay.on('click', closeModal) 
        var correctAnswer
        function generateQuestion(level) {
            var a = Math.floor(Math.random() * 5)
            var b = Math.floor(Math.random() * 6)
            var c = Math.floor(Math.random() * 7)
            var d = Math.floor(Math.random() * 10)
            var question = ''
         
    
            if (level.startsWith("easy")) {
                correctAnswer = a + b;
                question = a + " + " + b;
            } else if (level.startsWith("medium")) {
                correctAnswer = a + b * c;
                question = a + " + " + b + " * " + c
            } else if (level.startsWith("hard")) {
                correctAnswer = a + b / c * d 
                question = a + " + " + b + " / " + c + " * " + d
            } else {
                correctAnswer = a + b - c * d
                question = a + " + " + b + " - " + c + " * " + d
            }
    
            return { question: question, correctAnswer: correctAnswer }
        }
    
       
        $(".show-modal").on('click', function(event) {
            var level = event.target.id;
            var questionData = generateQuestion(level);
            $('.theQuestion').html(`<p id="question">${questionData.question}</p>`);    
            
        });
        
        $("#okay-button").on('click', function() {
            var userAnswer = parseFloat($('#num').val());
          
        
            if (userAnswer == correctAnswer) {
                $(".modal").append('<p class="Answerstyle">Correct Answer!</p>')
               
            } 
            else {
                $(".modal").append('<p class="Answerstyle">False Answer</p>');
            }
           
            
        });


       

        
    
    




