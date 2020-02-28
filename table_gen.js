$(document).ready(function()
{
	var $tbody;
	var $table= $('<table>');	
    $("button").click(function()
    {
        if (this.id == "clearButton")
		{
			commands.clear();
		}
        else if(this.id == "addButton")
		{
			commands["add table"]();
		}
        else if(this.id == "addRow")
		{
			commands["add row"]();
		}
        else if(this.id == "bigger")
		{
            commands.bigger();
		}
        else if(this.id == "smaller")
		{
            commands.smaller();
		}
        else if($(this).is(".goRed"))
		{
			commands.red();
		}
        else if($(this).is(".goPink"))
		{
			commands.pink();
		}
        else if($(this).is(".theDefault"))
		{
			commands.green();
		}
        	else if($(this).is(".goBlack"))
		{
			commands.black();
		}
		else if($(this).is(".goBlue"))
		{
			commands.blue();
		}
        	else if($(this).is(".goOrange"))
		{
			commands.orange();
		}
    });
    
    $('select').on('change', function()
    {
        //alert( this.value );
        if((this).value==1)
        {
             $('input').css("font-family","Verdana");   
        }
        else if((this).value==2)
        {
            $('input').css("font-family","Times New Roman");
        }
        else if((this).value==3)
        {
                $('input').css("font-family","Helvetica");
        }
        else if((this).value==4)
        {
                $('input').css("font-family","Arial Black");
        }
        else if((this).value==5)
        {
                $('input').css("font-family","Georgia");
        }
        else if((this).value==6)
        {
                $('input').css("font-family","Impact");
        }
        else if((this).value==7)
        {
                $('input').css("font-family","Courier New");
        }
    });
    
    if (annyang) 
	{
        var commands = 
		{
            'add row': function()
			{
				$tbody.append('<tr />')
                .children('tr:last')
                .append("<td><button class='cellAdd'>+C</button><button class='cellDelete'>-C</button><button class='deleteButton'>-R</button></td>");

                $(".deleteButton").click(function()
                {   
                    $(this).parent().parent().remove();

                });

                $(".cellAdd").click(function()
                {
                    $(this).parent('td:last').after("<td><input /></td>");
                });

                 $(".cellDelete").click(function()
                {
                    $(this).parent().siblings('td:last').remove();
                });
			},
            'add table': function()
			{
				$table.append('<caption>MyTable</caption>')
                .append('<thead />')
                .children('thead')
                .append('<tr />')
                .children('tr')
                .append("<th><button class='cellAdd'>+C</button><button class='cellDelete'>-C</button></th>");

                $tbody = $table.append('<tbody />')
                .children('tbody');
                $table.appendTo('#dynamicTable');

                $(".cellAdd").click(function()
                {
                    $(this).parent('th:last').after("<th><input /></th>");
                });

                $(".cellDelete").click(function()
                {
                    $(this).parent().siblings('thead th:last').last().remove();
                });
            },
                'clear': function()
                {
                    $("table").empty();
                },
                'delete': function()
                {
                    $(this).parent().parent().remove(); 
            },
			'red': function()
			{
				$("h1, caption, select, table").removeClass().addClass("red");
				$("#theme, #fontC, #bigger, #smaller, #addButton, #clearButton, #addRow").css("background-color", "red");
				
			},
			'pink': function()
			{
				$("h1, caption, select, table").removeClass().addClass("pink");
				$("#theme, #fontC, #bigger, #smaller, #addButton, #clearButton, #addRow").css("background-color", "hotpink");
			},
			'blue': function()
			{
				$("h1, caption, select, table").removeClass().addClass("blue");
				$("#theme, #fontC, #bigger, #smaller, #addButton, #clearButton, #addRow").css("background-color", "blue");
			},
			'orange': function()
			{
				$("h1, caption, select, table").removeClass().addClass("orange");
				$("#theme, #fontC, #bigger, #smaller, #addButton, #clearButton, #addRow").css("background-color", "orange");
			},
			'green': function()
			{
				$("h1, caption, select, table").removeClass().addClass("default");
				$("#theme, #fontC, #bigger, #smaller, #addButton, #clearButton, #addRow").css("background-color", "cadetblue");
			},
			'black': function()
			{
				$("h1, caption, select, table").removeClass().addClass("black");
				$("#theme, #fontC, #bigger, #smaller, #addButton, #clearButton, #addRow").css("background-color", "black");
			},
            'bigger': function()
            {
                var currentSize =parseInt($("input").css('font-size'));  
                currentSize =currentSize + 1 + "px";
                $('input').css({'font-size':currentSize});
            },
            'smaller':function()
            {
                var currentSize =parseInt($("input").css('font-size'));  
                currentSize =currentSize - 1 + "px";
                $('input').css({'font-size':currentSize});
            }
        };
        annyang.addCommands(commands);
        annyang.start();  
    }    
});










