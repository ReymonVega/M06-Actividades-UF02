class Clock {
    constructor(hora, minut, segon, sentit = true, estat) {
        this.hora = hora;
        this.minut = minut;
        this.segon = segon;
        this.sentit = sentit;
        this.estat = estat;
    }

    arrenca() {
        if (!this.estat) {
            this.estat = true;
            this.intervalId = setInterval(() => {
                if (this.sentit) {
                    this.segon++;
                    if (this.segon === 60) {
                        this.segon = 0;
                        this.minut++;
                        if (this.minut === 60) {
                            this.minut = 0;
                            this.hora++;
                        }
                    }
                } else {
                    if (this.segon === 0) {
                        this.segon = 59;
                        this.minut--;
                        if (this.minut === 0) {
                            this.minut = 59;
                            this.hora--;
                        }
                    } else {
                        this.segon--;
                    }
                }
            }, 1000);
        }
    }

    atura() {
        if (this.estat) {
            this.estat = false;
            clearInterval(this.intervalId);
        }
    }

    reset() {
        this.atura();
        this.segon = 0;
        this.minut = 0;
        this.hora = 0;
    }

    set(hora, minut, segon) {
        this.atura();
        this.segon = segon;
        this.minut = minut;
        this.hora = hora;
    }

    formata() {
        return `${this.hora.toString().padStart(2, '0')}:${this.minut.toString().padStart(2, '0')}:${this.segon.toString().padStart(2, '0')}`;
    }
}


let hoy = Date.now();
let data = new Date(hoy);
let reloj1 = new Clock(data.getHours(), data.getMinutes(), data.getSeconds(), true, false);
let reloj2 = new Clock(0, 0, 0, true, false);
let reloj3 = new Clock(0, 5, 0, false);
let contador = 0;

function pintaHora() {
    document.getElementById("div1").innerHTML = `reloj 1: ${reloj1.formata()}`;
    document.getElementById("div3").innerHTML = `reloj 3: ${reloj3.formata()}`;
    if (contador > 10) {
        reloj2.arrenca();
        document.getElementById("div2").innerHTML = `reloj 2: ${reloj2.formata()}`;
    }
    reloj1.arrenca();
    contador++;
}

setInterval(pintaHora, 1000);