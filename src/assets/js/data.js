export const dataStudents = [
    {
        nome: "Carlos",
        notas: [7, 7, 8.5, 9],
        media: function () {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            console.log(media)
            return (media / this.notas.length);
        }
    },
    {
        nome: "Carlos",
        notas: [7, 7, 8.5, 9],
        media: function () {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Maria",
        notas: [8.2, 7.4, 9.0, 8.5],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Pedro",
        notas: [7.8, 6.4, 8.3, 7.2],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Joana",
        notas: [9.1, 8.7, 8.9, 9.4],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Lucas",
        notas: [6.2, 5.9, 7.0, 6.8],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Fernanda",
        notas: [8.5, 8.8, 9.2, 8.9],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Roberto",
        notas: [6.5, 7.2, 7.1, 6.9],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Camila",
        notas: [7.5, 8.3, 8.7, 7.9],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Andre",
        notas: [7.0, 7.1, 7.2, 7.3],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    },
    {
        nome: "Isabela",
        notas: [8.0, 8.1, 8.2, 8.3],
        media: function() {
            let media = Math.ceil(this.notas.reduce((a, b) => a + b, 0));
            return (media / this.notas.length);
        }
    }

];
