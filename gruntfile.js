module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target.css file: source.less file
					"css/style.css": "css/less/style.less"
				}
			}
		},

		uglify: {
			development: {
				options: {
					sourceMap: true,
					sourceMapName: 'js/sourcemap.map'
				},
				files: {
					'js/swwt.min.js' : ['js/src/*.js', 'js/src/chargen/edges.js','js/src/chargen/hindrances.js','js/src/chargen/equipment.js','js/src/chargen/skills.js','js/src/chargen/races.js','js/src/chargen/races.js', 'js/src/chargen/engine.js', 'js/src/chargen/character.js', 'js/src/extras/*.js', 'js/src/creators/vehicle_weapons.js'],
					'js/creator.walker.min.js' : [ 'js/src/creators/walker*.js'],
					'js/creator.vehicle.min.js' : ['js/src/creators/vehicle_mods.js', 'js/src/creators/vehicles.js'],
					'js/creator.power_armor.min.js' : [ 'js/src/creators/power_armor*.js'],
					'js/creator.starship.min.js' : [ 'js/src/creators/starship*.js'],
					'js/creator.robot.min.js' : [ 'js/src/creators/robot*.js'],
				}
			}
		},
		watch: {
			styles: {
				// Which files to watch (all .less files recursively in the less directory)
				files: ['css/less/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			},
			scripts: {
				// Which files to watch (all .js files recursively in the js src directory)
				files: ['js/src/*.js','js/src/extras/*js','js/src/chargen/*js','js/src/creators/*js'],
				tasks: ['uglify'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch']);
};
