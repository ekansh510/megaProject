class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    player1.scale=0.4
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    player2.scale=0.4
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();
                //
                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = World.mouseX;
                     players[index - 1].y = World.mouseY;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

            
                 if (frameCount % 20 === 0) {
                     apple = createSprite(random(100, 1000), 0, 100, 100);
                     apple.addImage(fruit1_img)
                     apple.velocityY = 6;
                     
                     appleGroup.add(apple);
                                      
                }
                   if (frameCount % 50 === 0) {
                    mango = createSprite(random(100, 1000), 0, 100, 100);
                    mango.addImage(fruit6_img)
                    mango.scale=0.3
                    mango.velocityY = 6;
                   
                   
                    mangoGroup.add(mango);
                  
                 }
                   if (frameCount % 60 === 0) {
                    banana = createSprite(random(100, 1000), 0, 100, 100);
                    banana.addImage(fruit2_img)
                    banana.velocityY = 6;
                   
                    
                    bananaGroup.add(banana);
                  
                 }
                    if (frameCount % 120 === 0) {
                    pineapple = createSprite(random(100, 1000), 0, 100, 100);
                    pineapple.addImage(fruit5_img)
                    pineapple.velocityY = 6;
                
                    pineappleGroup.add(pineapple);
                    
                }
                  if (frameCount % 200 === 0) {
                    orange = createSprite(random(100, 1000), 0, 100, 100);
                    orange.addImage(fruit4_img)
                    orange.velocityY = 6;
                    
                    
                 orangeGroup.add(orange);                               
                } 
                 if (frameCount % 80 === 0) {
                    wm = createSprite(random(100, 1000), 0, 100, 100);
                    wm.addImage(fruit3_img)
                    wm.scale=0.3
                    wm.velocityY = 6;
                   
                    wmGroup.add(wm);
                }   
                if (frameCount % 200 === 0) {
                    monster = createSprite(random(100, 1000), 0, 100, 100);
                    monster.velocityY = 6;
                    var r=Math.round(random(1,4))
                    switch(r){
                        case 1:monster.addImage(monster1)
                        break;
                        case 2:monster.addImage(monster2)
                        break;
                        case 3:monster.addImage(monster3)
                        break;
                        case 4:monster.addImage(monster4)
                        break;
                    }
                    monster.scale=0.3   
                    monsterGroup.add(monster);
                                     
               }
               
                 
                  if (player.index !== null) {
                      for (var i = 0; i < appleGroup.length; i++) {
                          if (appleGroup.get(i).isTouching(players)) {
                              appleGroup.get(i).destroy();
                              player.score =player.score+2;
                              player.update();
                              
                          }
                          
                      }
                  }  if (player.index !== null) {
                    for (var i = 0; i < bananaGroup.length; i++) {
                        if (bananaGroup.get(i).isTouching(players)) {
                            bananaGroup.get(i).destroy();
                            player.score =player.score-1;
                            player.update();
                            
                        }
                        
                    }
                }  if (player.index !== null) {
                    for (var i = 0; i < mangoGroup.length; i++) {
                        if (mangoGroup.get(i).isTouching(players)) {
                            mangoGroup.get(i).destroy();
                            player.score =player.score+3;
                            player.update();
                            
                        }
                        
                    }
                }   if (player.index !== null) {
                    for (var i = 0; i < pineappleGroup.length; i++) {
                        if (pineappleGroup.get(i).isTouching(players)) {
                            pineappleGroup.get(i).destroy();
                            player.score =player.score+1;
                            player.update();
                            
                        }
                        
                    }
                } if (player.index !== null) {
                    for (var i = 0; i < orangeGroup.length; i++) {
                        if (orangeGroup.get(i).isTouching(players)) {
                            orangeGroup.get(i).destroy();
                            player.score =player.score+4;
                            player.update();
                            
                        }
                        
                    }
                } if (player.index !== null) {
                    for (var i = 0; i < wmGroup.length; i++) {
                        if (wmGroup.get(i).isTouching(players)) {
                            wmGroup.get(i).destroy();
                            player.score =player.score-6;
                            player.update();
                            
                        }
                        
                    }
                } 
                
                if (player.index !== null) {
                    for (var i = 0; i < monsterGroup.length; i++) {
                        if (monsterGroup.get(i).isTouching(players)) {
                            game.update(2)
                            if(gameState===2){
                                g=createSprite(200,200,200,200)
                                g.addImage(gameover)
                                g.scale=1.2
                            }
                            player.update();
                            
                        }
                        
                    }
                } 
         
         
        
         
drawSprites();
    }

    end(){
        background("white")
       console.log("Game Ended")    
     }
}