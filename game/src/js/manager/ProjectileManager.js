import Bullet from '../objects/projectiles/Bullet.js';
import EnemyBullet from '../objects/projectiles/EnemyBullet.js';
import ChasingBullet from '../objects/projectiles/ChasingBullet.js';

class ProjectileManager{
    constructor(scene){ 
        this.scene = scene;
    }

    createPlayerBullet(){
        this.scene.projectiles =   this.scene.physics.add.group({
            classType: Bullet,
            runChildUpdate: true
        });
    }

    createEnemyBullet(){ 
        this.scene.enemyProjectiles =   this.scene.physics.add.group({
            classType: EnemyBullet,
            runChildUpdate: true
        });
    }

    createChaseBullet(){ 
        this.scene.chaseProjectiles =   this.scene.physics.add.group({
            classType: ChasingBullet,
            runChildUpdate: true
        });
    }

    callEnemyBullet(){
        this.scene.time.addEvent({
            delay: 1000, // 1000 milliseconds = 1 second
            callback: () => {
                this.scene.bug3_1.shootBullet(this.scene, this.scene.bug3_1);
            },
            loop: true // This makes the event repeat indefinitely
          });
    }

    callChaseBullet(){
        this.scene.time.addEvent({
            delay: 3000, // 1000 milliseconds = 1 second
            callback: () => {
                this.scene.bug3_2.shootChaseBullet(this.scene, this.scene.bug3_2);
            },
            loop: true // This makes the event repeat indefinitely
          });
    }

    createBossBullet(){

    }
}

export default ProjectileManager;