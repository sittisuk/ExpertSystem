$(document).ready(function(){
	// var y = $(location).attr('pathname');
	// $('.a').text(y);
	var color;
	var unloading;
	var mustache;
	var chest;
	var belly;
	$('.e').hide();
	$('.e').fadeIn(1000);

	$('#ber').addClass('display').click(function(){
		$('#ber2').slideDown(300).addClass('display').click(function(){
			$('#ber3').slideDown(300).addClass('display').click(function(){
				$('#ber4').slideDown(300).addClass('display').click(function(){
					$('#ber5').slideDown(300).addClass('display').click(function(){
						$('#ber6').slideDown(300).addClass('display').click(function(){
							$('#ber7').slideDown(300).addClass('display').click(function(){
								$('#ber8').slideDown(300).addClass('display').click(function(){
									$('#ber9').slideDown(300).addClass('display').click(function(){
										$('#ber10').slideDown(300).addClass('display');
									})
								})
							})
						})
					})
				})
			})
		})
	})


	$('.next').click(function(){
			color 		= $('input[name=color]:checked').val();
			unloading = $('input[name=unloading]:checked').val();
			mustache 	= $('input[name=mustache]:checked').val();
			chest			=	$('input[name=chest]:checked').val();
			belly			=	$('input[name=belly]:checked').val();
			if(color == 0 || color == undefined){
				$('.fs-error').html('<span style="color:red;"> Checked Radio Please !</span>');
			}else{
				$('.fs-error').hide();
				current_fs = $(this).parent();
				next_fs = $(this).parent().next();
				nextTime();
				$('#first').html( '- '+color);
				$('#two').html( '<br>- '+unloading);
				// $('#three').html( '<br>- '+mustache);
				$('#four').html( '<br>- '+chest);
				// $('#five').html( '<br>- '+belly);
				if(color == 'สีแดง'){
					$('#Answer').html('มดคันไฟ, มดแดง, มดละเอียด');
					$('#Ans').hide();
					if(unloading == 'มีขนปกคลุมตัว'){
						$('#Answer').html('มดคันไฟ, มดละเอียด');
						if(chest == 'อกกว้าง'){
							$('#Answer').html('มดละเอียด');
							$('#Ans').show().html('มีลักษณะสีเหลืองจนถึงสีน้ำตาลอ่อนหรือสีแดงสว่างใส ตาเล็ก ชอบทำรังอยู่ใกล้แหล่งอาหาร');
						}else if (chest == 'อกแคบ') {
							$('#Answer').html('มดคันไฟ');
							$('#Ans').show().html('มีลักษณะสีเหลืองแดง ทำรังอยู่ใต้ดินที่ร่วนซุย มีรูทางเข้าออก เล็กๆ บนพื้นดินได้หลายรู');
						}
					}else if(unloading == 'มีขนน้อย'){
						$('#Answer').html('มดแดง');
						$('#Ans').show().html('มีลักษณะสีแดงเข้ม ทำรังบนต้นไม้ใหญ่ เช่น ต้นมะม่วง');
					}


				}else if(color = 'สีดำ'){
					$('#Answer').html('มดดำ, มดเหม็น, มดง่าม, มดตะนอย');
					$('#Ans').hide();
					if(unloading == 'มีขนปกคลุมตัว'){
						$('#Answer').html('มดง่าม, มดตะนอย');
						if(chest == 'อกกว้าง'){
							$('#Answer').html('มดตะนอย');
							$('#Ans').show().html('มีลักษณะสีดำปนต้ำตาลเหลือง ทำรังอยู่ในต้นไม้ ใหญ่ที่ตายแล้ว เช่น ต้นก้ามปู');
						}else if (chest == 'อกแคบ') {
							$('#Answer').html('มดง่าม');
							$('#Ans').show().html('มีลักษณะสีน้ำตาลดำเป็นมัน กรามใหญ่ ขนาดยาวประมาณ 2.5 มิลลิเมตร ทำรังในดินร่วนมองผิวดินจะเห็นเป็นเพียงรูเปิดเล็ก ๆ และมีดินร่วงกองอยู่รอบๆ ของขอบรูเข้าออก');
						}
					}else if (unloading == 'มีขนน้อย') {
						$('#Answer').html('มดดำ, มดเหม็น');
						if(chest == 'อกกว้าง'){
							$('#Answer').html('มดดำ');
							$('#Ans').show().html('มีลักษณะสีน้ำตาลเข้มบางส่วนสีดำ ชอบอาศัยอยู่ในที่อยู่อาศัยและภายนอกบ้าน');
						}else if (chest == 'อกแคบ') {
							$('#Answer').html('มดเหม็น');
							$('#Ans').show().html('มีลักษณะหัวสีดำ ทำรังบนดินร่วม บริเวณโดนต้นไม้ เช่น ต้นไผ่');
						}
					}
				}
			}
	});

	$(".previous").click(function(){
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
		preTime();
	});

	$("#msform").submit(function(){
		var fname = $('#fname').val();
		if ($.trim(fname).length == 0) {
			document.getElementById("fname").style.borderColor = "#E34234";
			$('.fs-error').html('<span style="color:red;"> Please Enter First Name !</span>');
			$('.fs-error').show();
			return false;
		}else{
			$('.fs-error').hide();
			var serializedReturn = formData();
			window.location = "simple.html";
			return false;
		}
	});
});



function nextTime(){
	next_fs.show();
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		easing: 'easeInOutBack'
	});
}

function preTime(){
	previous_fs.show();
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 0.8 + (1 - now) * 0.2;
			left = ((1-now) * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		easing: 'easeInOutBack'
	});
}
