function extend(defaults, options) {
    var extended = {};
    var prop;
    for (prop in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
            extended[prop] = defaults[prop];
        }
    }
    for (prop in options) {
        if (Object.prototype.hasOwnProperty.call(options, prop)) {
            extended[prop] = options[prop];
        }
    }
    return extended;
};

function Graph(selector) {
    this.init(selector);
}

Graph.prototype.init = function (selector) {
    this.canvas = document.getElementById(selector);
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.fatia = [];
    this.selec = -1;
    this.ctx = this.canvas.getContext("2d");
    this.total = 0;

}

Graph.prototype.pizza = function () {
    this.tipo = "pizza";
    this.radius = Math.min(this.width, this.height) / 2;
    this.center_x = this.width / 2;
    this.center_y = this.height / 2;

    this.mouseoverHandler = this.mouseSobre.bind(this);
    this.mouseoutHandler = this.mouseFora.bind(this);
    this.mouseclickHandler = this.mouseClique.bind(this);

    this.canvas.addEventListener('mousemove', this.mouseoverHandler, false);
    this.canvas.addEventListener('mouseout', this.mouseoutHandler, false);
    this.canvas.addEventListener('click', this.mouseclickHandler, false);

    let acumulada = 0;
    for (var v in this.fatia) {
        let porcao = this.fatia[v].valor / this.total;
        this.fatia[v].obj = new Path2D;
        this.fatia[v].obj.moveTo(this.center_x, this.center_y);
        this.fatia[v].obj.arc(
            this.center_x,
            this.center_y,
            this.radius,
            Math.PI * (- 0.5 + 2 * acumulada), // inicio da fatia
            Math.PI * (- 0.5 + 2 * (acumulada + porcao)), // fim da fatia
            false
        );
        acumulada += porcao;
    }
}

Graph.prototype.getType = function () {
    return this.tipo;
}

Graph.prototype.getValues = function () {
    return this.fatia;
}

Graph.prototype.setAnotation = function (value) {
    if (this.tipo === 'rosca' && typeof value === "boolean")
        this.anotation = value;
    else
        console.log('Error in set anotation.');
}

Graph.prototype.rosca = function () {
    this.tipo = "rosca";
    this.anotation = false;
    this.area_interna = null;
    this.radius = Math.min(this.width, this.height) / 2;
    this.center_x = this.width / 2;
    this.center_y = this.height / 2;

    this.mouseoverHandler = this.mouseSobre.bind(this);
    this.mouseoutHandler = this.mouseFora.bind(this);
    this.mouseclickHandler = this.mouseClique.bind(this);

    this.canvas.addEventListener('mousemove', this.mouseoverHandler, false);
    this.canvas.addEventListener('mouseout', this.mouseoutHandler, false);
    this.canvas.addEventListener('click', this.mouseclickHandler, false);

    let acumulada = 0;
    for (var v in this.fatia) {
        let porcao = this.fatia[v].valor / this.total;
        this.fatia[v].obj = new Path2D;
        this.fatia[v].obj.moveTo(this.center_x, this.center_y);
        this.fatia[v].obj.arc(
            this.center_x,
            this.center_y,
            this.radius,
            Math.PI * (- 0.5 + 2 * acumulada), // inicio da fatia
            Math.PI * (- 0.5 + 2 * (acumulada + porcao)), // fim da fatia
            false
        );
        acumulada += porcao;
    }
}

Graph.prototype.barra = function () {
    this.tipo = "barra";

    this.mouseoverHandler = this.mouseSobre.bind(this);
    this.mouseoutHandler = this.mouseFora.bind(this);
    this.mouseclickHandler = this.mouseClique.bind(this);

    this.canvas.addEventListener('mousemove', this.mouseoverHandler, false);
    this.canvas.addEventListener('mouseout', this.mouseoutHandler, false);
    this.canvas.addEventListener('click', this.mouseclickHandler, false);

    let large = (this.width / this.fatia.length) * 0.95;
    let acumulada = 0;
    for (var v in this.fatia) {
        this.fatia[v].obj = new Path2D;
        this.fatia[v].obj.moveTo(0, 0);
        this.fatia[v].obj.rect(
            acumulada,
            (this.height - ((this.height / this.maior) * this.fatia[v].valor)),
            large,
            ((this.height / this.maior) * this.fatia[v].valor)
        );
        acumulada += (large * 1.05);
    }
}

Graph.prototype.linha = function () {
    this.tipo = "linha";

    this.mouseoverHandler = this.mouseSobre.bind(this);
    this.mouseoutHandler = this.mouseFora.bind(this);
    this.mouseclickHandler = this.mouseClique.bind(this);

    this.canvas.addEventListener('mousemove', this.mouseoverHandler, false);
    this.canvas.addEventListener('mouseout', this.mouseoutHandler, false);
    this.canvas.addEventListener('click', this.mouseclickHandler, false);

    let border = 15;
    let porcao = ((this.width - (2 * border)) / this.fatia.length);
    let pos = border;
    let auxy = this.height - border;
    let pin = 8;
    for (var v in this.fatia) {
        this.fatia[v].obj = new Path2D;
        this.fatia[v].obj.moveTo(pos, auxy);
        pos = pos + porcao;
        auxy = ((this.height) - (((this.height - (2 * border)) / this.maior) * this.fatia[v].valor)) - border;
        this.fatia[v].obj.lineTo(pos, auxy);
        this.fatia[v].obj.rect(
            pos - (pin / 2),
            auxy - (pin / 2),
            pin,
            pin,
        );
    }

}

Graph.prototype.pontos = function () {
    this.tipo = "pontos";

    this.mouseoverHandler = this.mouseSobre.bind(this);
    this.mouseoutHandler = this.mouseFora.bind(this);
    this.mouseclickHandler = this.mouseClique.bind(this);

    this.canvas.addEventListener('mousemove', this.mouseoverHandler, false);
    this.canvas.addEventListener('mouseout', this.mouseoutHandler, false);
    this.canvas.addEventListener('click', this.mouseclickHandler, false);

    let border = 15;
    let porcao = ((this.width - (2 * border)) / this.fatia.length);
    let pos = border;
    let auxy = this.height - border;
    let pin = 8;
    for (var v in this.fatia) {
        this.fatia[v].obj = new Path2D;
        // this.fatia[v].obj.moveTo(pos, auxy);
        pos = pos + porcao;
        auxy = ((this.height) - (((this.height - (2 * border)) / this.maior) * this.fatia[v].valor)) - border;
        // this.fatia[v].obj.lineTo(pos, auxy);
        this.fatia[v].obj.rect(
            pos - (pin / 2),
            auxy - (pin / 2),
            pin,
            pin,
        );
    }
}

Graph.prototype.mouseClique = function (event) {
    var x = event.pageX - this.canvas.offsetLeft,
        y = event.pageY - this.canvas.offsetTop;
    for (var f in this.fatia) {
        if (this.ctx.isPointInPath(this.fatia[f].obj, x, y) && this.fatia[f].funcao) {
            this.fatia[f].funcao();
        }
    }
}

Graph.prototype.mouseSobre = function (event) {
    var x = event.pageX - this.canvas.offsetLeft,
        y = event.pageY - this.canvas.offsetTop;
    this.canvas.title = "";
    this.canvas.style.cursor = "";
    this.selec = -1;
    // console.log(x, y);
    for (var f in this.fatia) {
        if (this.ctx.isPointInPath(this.fatia[f].obj, parseInt(x), parseInt(y)) && this.selec != f) {
            if (!this.hasOwnProperty('area_interna') || this.area_interna == null || !this.ctx.isPointInPath(this.area_interna, parseInt(x), parseInt(y))) {
                this.canvas.title = this.fatia[f].nome + ' (' + (this.fatia[f].valor / this.total * 100).toFixed(2) + '%)(' + this.fatia[f].valor + ')';
                this.canvas.style.cursor = "pointer";
                this.drawSpecific(this.selec);
                this.selec = f;
                // console.log(this.selec != f);
            }
        }
    }
    this.drawSpecific(this.selec);
}

Graph.prototype.mouseFora = function (event) {
    this.selec = -1;
    this.drawSpecific(this.selec);
}

Graph.prototype.load = function (options) {
    this.maior = 0;
    if (!options.hasOwnProperty('elements')) {
        console.log("Error in load elements! No have elements to load.");
        return;
    }
    let def_conf = {
        background: 'white',
    };
    this.conf = extend(def_conf, options);
    for (var v in options.elements) {
        def = {
            cor: '#' + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-7, -1),
            nome: "Item " + v,
            valor: Math.floor(Math.random() * 100),
            funcao: null,
            cor_borda: null,
        }
        options.elements[v] = extend(def, options.elements[v]);
        this.total += options.elements[v].valor;
        if (this.maior < options.elements[v].valor) this.maior = options.elements[v].valor;
        this.fatia[v] = {
            obj: new Path2D(),
            cor: options.elements[v].cor,
            nome: options.elements[v].nome,
            valor: options.elements[v].valor,
            funcao: options.elements[v].funcao,
            cor_borda: options.elements[v].cor_borda,
        };
    }
}

Graph.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = this.conf.background;
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fill();
    for (var v in this.fatia) {
        this.drawSpecific(v);
    }
    this.ctx.beginPath();
    if (this.tipo === 'rosca') {
        this.area_interna = new Path2D();
        this.area_interna.arc(this.center_x, this.center_y, (this.radius / 2), 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.conf.background;
        this.ctx.fill(this.area_interna);
    }
    this.ctx.closePath();
}

Graph.prototype.drawSpecific = function (value) {
    if (value === -1) {
        this.draw();
        return;
    }
    this.ctx.beginPath();
    this.ctx.fillStyle = this.fatia[value].cor;
    if (this.selec === value) {
        this.ctx.filter = "brightness(150%)";
    }
    if (this.tipo === 'linha') {
        this.ctx.strokeStyle = this.fatia[value].cor_borda != null ? this.fatia[value].cor_borda : 'black';
        this.ctx.stroke(this.fatia[value].obj);
    } else {
        this.ctx.strokeStyle = this.fatia[value].cor_borda != null ? this.fatia[value].cor_borda : 'white';
    }
    this.ctx.fill(this.fatia[value].obj);
    if (this.tipo !== 'linha') this.ctx.stroke(this.fatia[value].obj);
    if (this.selec === value) {
        this.ctx.filter = "brightness(100%)";
    }
    if (this.tipo === 'rosca') {
        this.area_interna = new Path2D();
        this.area_interna.arc(this.center_x, this.center_y, (this.radius / 2), 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.conf.background;
        this.ctx.fill(this.area_interna);
        if (this.anotation && this.selec == value) {
            this.ctx.font = '10pt Arial'; //Define Tamanho e fonte
            this.ctx.fillStyle = "black"; //Define a cor
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            this.ctx.fillText(this.fatia[value].nome + ' (' + (this.fatia[value].valor / this.total * 100).toFixed(2) + '%)(' + this.fatia[value].valor + ')', this.center_x, this.center_y); //Desenha a mensagem
        }
    }
    this.ctx.closePath();
}