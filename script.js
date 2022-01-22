let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let result = document.querySelector(".result")

    let startGame = () => {
        let playBtn = document.querySelector(".play")
        let intro = document.querySelector(".intro")
        let gameSection = document.querySelector(".game-section")
        let hands = document.querySelectorAll(".hands img")
        let gameWinner= document.querySelector(".game-winner")
        let finalResult= document.querySelector(".final-result")
        let playAgain= document.querySelector(".play-again")

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = ""
            })
        })

        playBtn.addEventListener("click", () => {
            intro.classList.add("hide")
            gameSection.classList.remove("hide")
        })
    }

    function updateScore() {
        let displayPLayerScore = document.querySelector(".player-score")
        let displayComputerScore = document.querySelector(".computer-score")
        displayPLayerScore.innerHTML = playerScore
        displayComputerScore.innerHTML = computerScore
    }

  
    let playMatch = () => {
        let options = document.querySelectorAll(" .options button")
        let playerHand = document.querySelector(".player-hand")
        let computerHand = document.querySelector(".computer-hand")

        let computerChoice = ["rock", 'paper', 'scissor']

        options.forEach(option => {
            option.addEventListener("click", function () {
                let randNum = Math.floor(Math.random() * 3)
                var computerDecision = computerChoice[randNum]
                let playerDecision = this.innerHTML
                console.log(`players decision is : ${playerDecision}`)
                console.log(`computers decision is : ${computerDecision}`)


                setTimeout(() => {
                    compareDescisions(playerDecision, computerDecision)
                    playerHand.src = `./image/${playerDecision}.png`
                    computerHand.src = `./image/${computerDecision}.png`
                }, 1500)

                playerHand.style.animation = "shakePlayer 1.5s ease"
                computerHand.style.animation = "shakeComputer 1.5s ease"

                playerHand.src = `./image/rock.png`
                computerHand.src = `./image/rock.png`
            })

        })


        function compareDescisions(playerDecision, computerDecision) {


            if (playerDecision === computerDecision) {
                result.innerHTML = "Draw   Draw"
            }
            else {
                if (playerDecision === "scissor") {
                    if (computerDecision === 'rock') {
                        result.innerHTML = "computer wins"
                        computerScore++;
                        updateScore()
                        return;
                    } else {
                        result.innerHTML = "you win"
                        playerScore++;
                        updateScore()
                        return;
                    }
                }
                if (playerDecision === "paper") {
                    if (computerDecision === 'rock') {
                        result.innerHTML = "you win"
                        playerScore++;
                        updateScore()
                        return;
                    } else {
                        result.innerHTML = "computer wins"
                        computerScore++;
                        updateScore()
                        return;
                    }
                }
                if (playerDecision === "rock") {
                    if (computerDecision === 'scissor') {
                        result.innerHTML = "you win"
                        playerScore++;
                        updateScore()
                        return;
                    } else {
                        result.innerHTML = "computer wins"
                        computerScore++;
                        updateScore()
                        return;
                    }
                }
            }





        }


    }
    // calling all function
    startGame()
    playMatch()

    //update score



}

game()

