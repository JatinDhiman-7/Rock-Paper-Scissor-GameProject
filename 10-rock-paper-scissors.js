  let score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            loss: 0,
            tie: 0,
        };

        updatescoreElement();

        function playGame(playerMove) {
            const computerMove = pickComputerMove();
            let result = '';

            if (playerMove === 'scissors') {
                if (computerMove === 'scissors') {
                    result = 'tie';
                } else if (computerMove === 'paper') {
                    result = 'You win';
                } else if (computerMove === 'rock') {
                    result = 'You lose';
                }

            } else if (playerMove === 'paper') {
                if (computerMove === 'paper') {
                    result = 'tie';
                } else if (computerMove === 'rock') {
                    result = 'You win';
                } else if (computerMove === 'scissors') {
                    result = 'You lose';
                }

            } else if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'tie';
                } else if (computerMove === 'paper') {
                    result = 'You win';
                } else if (computerMove === 'scissors') {
                    result = 'You lose';
                }
            }

            if (result === 'You win') {
                score.win += 1;
            } else if (result === 'You lose') {
                score.loss += 1;
            } else if (result === 'tie') {
                score.tie += 1;
            }
            localStorage.setItem('score', JSON.stringify(score));

            document.querySelector(".js-result").innerHTML = result;

            document.querySelector(".js-moves").innerHTML = `You
        <img src="image/${playerMove}-emoji.png" class="move-icon">
        <img src="image/${computerMove}-emoji.png" class="move-icon">
        Computer`;

            updatescoreElement();

        }


        function updatescoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.loss} ,Ties:${score.tie}`;
        }


        function pickComputerMove() {
            const randomNumber = Math.random();

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            }
            else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }

            return computerMove;
        }


