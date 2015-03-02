;(function() {
	var Game = function() {
		var screen = document.getElementById("snake").getContext("2d");
		this.size = { x: screen.canvas.width, y: screen.canvas.height };
		this.bodies = [new Player(this)];

		var self = this;

		var tick = function() {
			self.update();
			self.draw(screen);
			requestAnimationFrame(tick);
		};

		tick();
	 };

	Game.prototype = {
	 	update: function() {
	 		for (var i=0; i < this.bodies.length; i++) {
	 			if (this.bodies[i].update !== undefined) {
	 				this.bodies[i].update();
	 			}
	 		}
	 	},
	 	draw: function(screen) {
	 		for (var i=0; i < this.bodies.length; i++) {
	 			if (this.bodies[i].draw !== undefined) {
	 				this.bodies[i].draw(screen);
	 			}
	 		}
	 	},
	 	addBody: function(body) {
	 		this.bodies.push(body);
	 	}
	};

	var Player = function(game) {
		this.game = game;
		this.size = { x: 15, y: 15 };
		this.center = { x: this.game.size.x / 2, y: this.game.size.y / 2 };
	};

	Player.prototype = {
		update: function() {
			
		},
		draw: function(screen) {
			drawRect(screen, this);
		}
	};

	var drawRect = function(screen, body) {
		screen.fillRect(body.center.x - body.size.x / 2,
						body.center.y - body.size.y / 2,
						body.size.x,
						body.size.y);
	};

	window.addEventListener("load", function() {
		new Game();
	});

})();