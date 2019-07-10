function Airy(id, options) {

	let self = this;

	this.id = document.getElementById(id);
	this.elements = document.getElementById(id).getElementsByClassName('airy-slider-item');

	this.dots();
	this.arrows();

	this.dot = this.dots.getElementsByClassName('airy-dot');

	this.options = this.extend(Airy.Defaults, options);

	this.slideIndex = 1;

	this.prev.addEventListener('click', function() {
		self.plusSlides( -1 );
	});

	this.next.addEventListener('click', function() {
		self.plusSlides( 1 );
	});

	this.dots.addEventListener('click', function( event ) {
		for (let i = 0; i < self.dot.length + 1; i++) {
			if ( event.target.classList.contains('airy-dot') && event.target == self.dot[i - 1]) {
				self.currentSlide(i);
			}
		}
	});

}

Airy.prototype.dots = function() {
	this.dots = document.createElement('div');
	this.dots.className = 'airy-dots'; 

	for (let i = 0; i < this.elements.length; i++) {
		this.dot = document.createElement('div');
		this.dot.className = 'airy-dot';
		this.dots.appendChild(this.dot);
	}

	this.id.appendChild(this.dots);
}

Airy.prototype.arrows = function() {
	this.arrows = document.createElement('div');
	this.arrows.className = 'airy-arrows';

	this.prev = document.createElement('div');
	this.prev.className = 'airy-prev';
	this.prev.innerHTML = '&#10094;';

	this.next = document.createElement('div');
	this.next.className = 'airy-next';
	this.next.innerHTML = '&#10095;';

	this.arrows.appendChild(this.prev);
	this.arrows.appendChild(this.next);
	this.id.appendChild(this.arrows);
}

Airy.prototype.extend = function( a, b ) {
	for(var key in b) {
		if(b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}			
	return a;
}

Airy.prototype.showSlides = function( n ) {

	if ( n > this.elements.length ) {
		this.slideIndex = 1;
	}

	if ( n < 1 ) {
		this.slideIndex = this.elements.length;
	}

	for ( let i = 0; i < this.elements.length; i++ ) {
		this.elements[i].style.display = 'none';
		this.elements[i].classList.add('airy-fade');
	}

	for ( let i = 0; i < this.dot.length; i++) {
		this.dot[i].classList.remove('airy-active');
	}

	this.elements[this.slideIndex - 1].style.display = 'block';
	this.dot[this.slideIndex - 1].classList.add('airy-active');
}

Airy.prototype.plusSlides = function( n ) {
	this.showSlides( this.slideIndex += n );
}

Airy.prototype.currentSlide = function( n ) {
	this.showSlides( this.slideIndex = n );
}

Airy.prototype.start = function() {
	this.showSlides();
	let self = this;
	if( this.options.loop == true) {
		this.arrows.style.display = 'none';
		this._timer = setInterval(function() {
			self.plusSlides( 1 );
		}, this.options.speed);
	}
	if( this.options.dots == false) {
		this.dots.style.display = 'none';
	}
}

Airy.Defaults = {
	dots: true,
	loop: false,
	speed: 1000
}