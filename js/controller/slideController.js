class slideController {

    constructor() {
       // atributos
       this.value;
       this.i;
       this.slideIndex = 1;
       
       this.slides = document.getElementsByClassName("slideshow");       
       this.dots = document.getElementsByClassName("dot");
       this.btnPrev = document.querySelectorAll(".change-slide");
      
       this.showSlides();
       this.autoPlay();
       this.changeSlides();
       this.currentDot();
    }

    // metodo para mostrar as imagens do slideshow
    showSlides(value) {

        // percorrendo pela div slideshow
        for (this.i = 0; this.i < this.slides.length; this.i++) {
            this.slides[this.i].style.display = "none";  
        }

    
        // prosseguindo slides
        if(this.slideIndex > this.slides.length) {
            this.slideIndex = 1;
        } else if(this.slideIndex < 1) {
            this.slideIndex = this.slides.length;
        }


        // percorrendo pela classe dots (pontos)
        for (this.i = 0; this.i < this.dots.length; this.i++) {
            this.dots[this.i].className = this.dots[this.i].className.replace(" active", "");
        }
        
        // responsável pelo próximo slide        
        this.slides[this.slideIndex-1].style.display = "block";  
        this.dots[this.slideIndex-1].className += " active";    
    }



    autoPlay() {
        // autoplay
        setInterval(() => {
            this.value = 1;
            this.showSlides(this.slideIndex += this.value);
        }, 5000); // slideshow altera a cada 5 segundos
    }


    changeSlides() {
        this.btnPrev.forEach((btn, index) => {
            btn.addEventListener('click', event => {
                // botao voltar    
                if(index == 0) {
                    this.value = -1; 
                    this.showSlides(this.slideIndex += this.value);
                } else {
                    this.value = 1;
                    this.showSlides(this.slideIndex += this.value);
                }
            });
        });   
    }

    currentDot() {
        [...this.dots].forEach((dot, index) => {
            dot.addEventListener('click', event => {
                switch(index) {
                    case 0:
                        this.value = 1;
                        this.showSlides(this.slideIndex = this.value);
                    break;

                    case 1:
                        this.value = 2;
                        this.showSlides(this.slideIndex = this.value);
                    break;

                    case 2:
                        this.value = 3;
                        this.showSlides(this.slideIndex = this.value);
                    break
                }
            });
        });
    }
}
