export function down(a,flag){
	if(flag == 'icon-Delete'){
		a.target.parentNode.parentNode.style.background = 'white'
		a.target.parentNode.previousElementSibling.previousElementSibling.childNodes[0].style.color = '#FC0E50'
		a.target.parentNode.previousElementSibling.style.color = 'black'
		a.target.parentNode.nextElementSibling.childNodes[0].style.color = '#FC0E50'
	}else{
		a.target.parentNode.parentNode.style.background = ''
		a.target.parentNode.previousElementSibling.previousElementSibling.childNodes[0].style.color = 'white'
		a.target.parentNode.previousElementSibling.style.color = 'white'
		a.target.parentNode.nextElementSibling.childNodes[0].style.color = 'white'
	}
} 

export function shrinking(a){
	let b = a.target.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild
	b.parentNode.previousElementSibling.style.paddingLeft = ''
	b.parentNode.previousElementSibling.previousElementSibling.childNodes[0].style.color = 'white'
	b.parentNode.previousElementSibling.style.color = 'white'
	b.parentNode.nextElementSibling.childNodes[0].style.color = 'white'
	b.parentNode.parentNode.style.background = ''
}
