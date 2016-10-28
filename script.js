$(document).ready(function(){
	// var y = $(location).attr('pathname');
	// $('.a').text(y);
	$('.e').hide();
	$('.e').fadeIn(1000);

	$('.next').click(function(){
			address 	= $('input[name=address]:checked').val();
			area 			= $('input[name=area]:checked').val();
			color 		= $('input[name=color]:checked').val();
			size			=	$('input[name=size]:checked').val();
			length		=	$('input[name=length]:checked').val();
			jaw				= $('input[name=jaw]:checked').val();
			food			= $('input[name=food]:checked').val();
			if(address == 0 || address == undefined){
				$('.fs-error').html('<span style="color:red;"> กรุณาเลือกแหล่งที่อยู่อาศัย !</span>');
			}else{
				$('.fs-error').hide();
				current_fs = $(this).parent();
				next_fs = $(this).parent().next();
				nextTime();
				$('#one').html( '- '+address);
				$('#two').html( '<br>- '+area);
				$('#three').html( '<br>- '+color);
				$('#four').html( '<br>- '+size);
				$('#five').html( '<br>- '+length);
				$('#six').html( '<br>- '+jaw);
				$('#seven').html( '<br>- '+food);


				if(address == 'แหล่งชุมชน'){
					// $('.Answer').html('มดน้ำผึ้ง, มดเหม็น, มดดำ, มดละเอียด, มดคันไฟ, มดกระสุน, มดทหาร, มดวัว, มดบูลด๊อก');
					if(area == 'ร่มเงา'){
						// $('.Answer').html('มดน้ำผึ้ง, มดเหม็น, มดละเอียด, มดคันไฟ, มดกระสุน, มดทหาร, มดวัว');
						if(color == 'สีดำ'){
							// $('.Answer').html('มดน้ำผึ้ง, มดเหม็น, มดละเอียด, มดกระสุน, มดทหาร');
							if(size == 'เล็กมาก'){
								// $('.Answer').html('มดละเอียด, มดเหม็น, มดน้ำผึ้ง, มดกระสุน, มดทหาร');
								if(length == 'มีขนปกคลุมตามตัว'){
									// $('.Answer').html('มดละเอียด, มดเหม็น, มดน้ำผึ้ง, มดกระสุน, มดทหาร');
									if(jaw == 'กรามใหญ่'){
										$('.Answer').html('มดกระสุน');
										$('#Ans').html('ความอันตรายของมดกระสุน ไม่ได้ทำร้ายถึงชีวิต แต่จะไม่สามารถลืมมันไปได้เลย มดกระสุนได้ชื่อนี้มาเพราะการกัดของมันจะทำให้รู้สึกเหมือนถูกปืนยิง');
										$('.food').hide();
										$('#bb').show(300);

									}else if (jaw == 'กรามเล็ก') {
										// $('.Answer').html('มดละเอียด, มดเหม็น, มดทหาร, มดน้ำผึ้ง');
										if(food == 'เนื้อสัตว์'){
											$('.Answer').html('มดทหาร');
											$('#Ans').html('มันอาศัยอยู่กันเป็นกลุ่มใหญ่มากแถมเดินทางไปทั่ว พวกมันพบมากที่สุดในแอฟริกาและเอเชีย มดพวกนี้จะสร้างรังชั่วคราวขึ้นในขณะที่มันกำลังเดินทางด้วย!');
										}else if (food == 'ของหวาน') {
											$('.Answer').html('มดน้ำผึ้ง');
											$('#Ans').html('การทำรัง – ทำรังในสถานที่หลายรูปแบบ ทั้งในที่แห้งและที่ชื้นการกินอาหาร – กินทั้งพืช สัตว์ เมล็ดพืช สัตว์ไม่มีกระดูกสันหลังที่ตายแล้ว สารคัดหลั่งจากพืช ผลไม้ และเศษขยะจากครัวเรือนสามารถรุกรานที่อยู่อาศัยและเอาชนะมดสายพันธุ์อื่นได้');
										}
									}
								}else if (length == 'มีน้อย') {
									$('.Answer').html('มดวัว');
									$('#Ans').html('ซึ่งมีนิสัยแตกต่างจากมดชนิดอื่นๆ ตรงที่มันชอบฉายเดี่ยวล่าเหยื่อ(เท่แฮะ) นอกจากกัดแล้วมันยังต่อยได้อีก เพราะมันมีเหล็กในที่ก้น');
									$('.jaw').hide();
									$('#bb').show(300);
								}else if (length == 'ไม่มี') {
									// $('.Answer').html('มดละเอียด มดเหม็น');
									if(jaw == 'กรามใหญ่'){
										$('#Ans').css('color','red').html('ยังไม่มีในฐานข้อมูล');
										$('.food').hide();
										$('#bb').show(300);
									}else if (jaw == 'กรามเล็ก') {
										// $('.Answer').html('มดละเอียด มดเหม็น');
										if(food == 'เนื้อสัตว์'){
											$('.Answer').html('มดเหม็น');
											$('#Ans').html('ชอบซ่อนตัวตามกาบใบที่มีความชุ่มชื้น มดเหม็น เมื่อเข้ามาหาอาหารใน บ้านเรือนจะขับถ่ายมูลทำให้เกิดการปนเปื้อนในอาหารและมีกลิ่นเหม็น');
										}else if (food == 'ของหวาน') {
											$('.Answer').html('มดละเอียด');
											$('#Ans').html('ที่อยู่อาศัย ทำให้ควบคุมได้ยาก มดละเอียดจะมีเหล็กในแต่ไม่ปรากฏให้เห็น เมื่อถูกรบกวนจะ ป้องกันตัวโดยการกัด');
										}
									}
								}
							}else if (size == 'เล็ก') {
								$('.Answer').html('มดบูลด๊อก');
								$('#Ans').html('มีสายพันธ์ย่อยๆกว่า 94 สายพันธ์ โดยบูลด๊อกเป็นพันธุ์ที่อันตรายที่สุด เมื่อโตเต็มที่จะมีขนาดได้ถึงสี่เซนติเมตร มีถิ่นกำเนิดจากออสเตรเลีย');
								$('.length').hide();
								$('#bb').show(300);

							}else if (size == 'ใหญ่') {
								$('#Ans').css('color','red').html('มดขนาดใหญ่กว่า 10mm ยังไม่มีในฐานข้อมูล');
								$('.length').hide();
								$('#bb').show(300);
							}
						}else if (color == 'สีแดง') {
							$('.Answer').html('มดคันไฟ');
							$('#Ans').html('ที่ตั้งของรังมดอาจเป็นเนินดินสูงไม่เกิน 40 ซม. หรือตั้งอยู่ติดกับวัตถุบนดิน เช่น ท่อนไม้');
							$('.size').hide();
							$('#bb').show(300);
						}
					}if (area == 'โล่งแจ้ง') {
						$('.Answer').html('มดดำ');
						$('#Ans').html('มดดำถือเป็นตัวสร้างความรำคาญ แล้วยังมีพฤติกรรมคุ้ยหาอาหารในครัว กองขยะ มูลสุนัข ซึ่งอาจก่อให้เกิดการแพร่กระจายของเชื้อโรค เช่น เชื้อซาลโมเนลลาวิธีควบคุมที่ได้ผลที่สุดคือ การค้นหารังและกำจัด');
						$('.color').hide();
						$('#bb').show(300);
					}
				}else if(address == 'ป่า'){
					// $('.Answer').html('มดแดง, มดง่าม, มดตะนอย, มดช่างไม้');
					if(area == 'ร่มเงา'){
						// $('.Answer').html('มดแดง, มดง่าม, มดช่างไม้');
						if(color == 'สีแดง'){
							$('.Answer').html('มดแดง');
							$('#Ans').html('ทำรังใต้ดิน นอกบ้าน ขนแข็ง ตัวเหลือง หนวด 2 ปล้องสุดจะยาวที่สุดน้ำตาล');
						}else if (color == 'สีดำ') {
							// $('.Answer').html('มดง่าม, มดช่างไม้');
							if(size == 'เล็กมาก'){
								$('.Answer').html('มดง่าม');
								$('#Ans').html('ชอบทำรังอยู่ในดิน ตัวสีดำ กรามใหญ่ ชอบอยู่บนพื้นดิน และ สวน')
							}else if (size == 'เล็ก') {
								$('.Answer').html('มดช่างไม้');
								$('#Ans').html('พบทั้งในไม้ชื้นและไม้แห้ง แต่จะชอบความชื้นมากกว่าภายใน - เจาะโพรงทำรังอยู่ในไม้พื้นผิวเรียบภายนอก - เจาะบางส่วนของต้นไม้เพื่อทำรัง')
							}
						}
					}else if (area == 'โล่งแจ้ง') {
						$('.Answer').html('ตะนอย');
						$('#Ans').html('ชอบทำรังบนต้นไม้ที่ตายแล้ว หัวและท้องดำ อกเหลือง')
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
		window.location = "simple.html";
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
