import React, { useEffect } from 'react'
import SubLayout from './SubLayout'
import bg from '../assets/image/office_img1.jpg'

function AboutUser() {

	useEffect(()=>{
		window.scrollTo({top:0, behavior:'smooth'})
	  },[])

	return (
	
        <SubLayout>
			<div className="about_user">
		<div className="about_user_inner">
			<div className="about_user_left">
			
			<div className="image">
			<img src={bg} alt="" />	
			</div>
			<div className="skills column">
			<h4>Name: <span>Mr Wonder SuperMan</span></h4>
              <h4>Position: <span>C.E.O</span></h4>
			</div>
			</div>
			<div className="about_user_right">
			<div className="intro_column">
				<h2>Introduction</h2>
				<p>
					I am a 25 year old Nigerian web developer with science and art background. I love to spend my free time creating python game for kids, playing and going on long walks with my dog. I love coding, fantasy and romance literature and
					series. 
				</p>
			</div>
			
			<div className="main-text">
				<h3>More About Me</h3>
				<p>
					I have studied History but have always been interested in web development. I was 24 years old when I made my first web page with HTML and CSS. While I was studying in the university I took computer science  as my minor subject and was introduced to programming. During my studies I was an active member in student associations and became responsible for all kinds of tasks and projects including being a web master. That and my previous interest in web development created a spark to turn my hobby into a career. I took my first steps towards my new career in January 2020.
				</p>
				<p>
					I'm highly energetic and motivated person and I love to work as a member or a leader of a team. I especially enjoy working with changing projects and taking them forward with rapid pace but high precision. I am talkative and sociable but also known for getting "in the zone" while concentrating on detailed work like programming or designing.
				</p>
			</div>
			</div>
		</div>
		</div>
		</SubLayout>
       
	)
}

export default AboutUser
