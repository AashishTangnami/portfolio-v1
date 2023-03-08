import random

class Player:
	def __init__(self, player_name: str, roshambo_choice: str, win : int, lose:int):

		self.player_name = player_name
		self.roshambo_choice = roshambo_choice
		self.wins = win
		self.losses = lose

	def __str__(self):
		return f"{self.player_name}: {self.roshambo_choice}"

class Bart(Player):

	def __init__(self, player_name: str, roshambo_choice: str, win : int, lose:int) -> str:
		Player.__init__(self, player_name, roshambo_choice, win, lose)
		self.player_name = "Bart"

	def generate_roshambo(self):
		self.roshambo_choice = "rock"
		return self.roshambo_choice

class Lisa(Player):
	def __init__(self, player_name: str, roshambo_choice : str, win: int, lose: int) -> str:
		Player.__init__(self, player_name, roshambo_choice, win, lose)
		self.player_name = "Lisa"

	def generate_roshambo(self):
		options = ["rock", "paper", "scissors"]
		self.roshambo_choice = random.choice(options)
		return self.roshambo_choice

def roshambo_play(player_obj : object, roshambo_obj: object, game_session : int ) -> int:
	
    if player_obj.roshambo_choice == roshambo_obj.roshambo_choice:
        game_session += 1
        print(f"\n\t {player_obj.player_name}! {player_obj.roshambo_choice} -- [ Draw! ] -- {roshambo_obj.player_name} : {roshambo_obj.roshambo_choice}\n")

    elif (player_obj.roshambo_choice == 'scissors' and roshambo_obj.roshambo_choice == 'rock') or\
            (player_obj.roshambo_choice == 'paper' and roshambo_obj.roshambo_choice == 'scissors') or\
                (player_obj.roshambo_choice == 'rock' and roshambo_obj.roshambo_choice == 'paper'):
        player_obj.losses += 1
        roshambo_obj.wins += 1
        game_session += 1
        print(f"\n\t {roshambo_obj.player_name} : {roshambo_obj.roshambo_choice} -- [ wins ] -- against {player_obj.player_name} : {player_obj.roshambo_choice} \n!")

    elif (player_obj.roshambo_choice == 'rock' and roshambo_obj.roshambo_choice == 'scissors') or\
            (player_obj.roshambo_choice == 'paper' and roshambo_obj.roshambo_choice =='rock') or\
                (player_obj.roshambo_choice == 'scissors' and roshambo_obj.roshambo_choice == 'paper'):

        player_obj.wins += 1
        roshambo_obj.losses += 1
        game_session += 1
        print(f"\n\t {player_obj.player_name} : {player_obj.roshambo_choice} -- [ wins! ] -- against {roshambo_obj.player_name} : {roshambo_obj.roshambo_choice}\n")


    print(f"{player_obj.player_name} wins: {player_obj.wins}/{game_session},\
    total lose: {player_obj.losses}/{game_session}")

    print(f"{roshambo_obj.player_name} wins: {roshambo_obj.wins}/{game_session}, \
    total lose: {roshambo_obj.losses}/{game_session}")

    return game_session

def play_again():
    return input("\n Play again? (y/n) ").lower()
     
def main():
	print("Roshambo Game\n")
	player_name = input("Enter your name: ")
	player_obj = Player(player_name, "", 0, 0)

	while True:
		choose_opponent = input("Would you like to play with Bart or Lisa? (b/B or l/L): ").lower()
		if choose_opponent == "b":
			roshambo_obj = Bart("", "", 0, 0)
			break
		elif choose_opponent == "l":
			roshambo_obj = Lisa("", "", 0, 0)
			break
		else:
			print("\n Invalid choice. Try again.\n")

	game_session = 0

	while True:
		play_value = input("\n Rock, paper, or scissors? (r/p/s): ").lower()

		if play_value not in ("r", "p", "s"):
			print("Invalid choice. Try again.")
			continue

		if play_value == "r":
			player_obj.roshambo_choice = "rock"

		elif play_value == "p":
			player_obj.roshambo_choice = "paper"

		elif play_value == "s":
			player_obj.roshambo_choice = "scissors"

		roshambo_obj.roshambo_choice = roshambo_obj.generate_roshambo()
		session = roshambo_play(player_obj, roshambo_obj, game_session)
		game_session = session

		another_round = play_again()
		if another_round == "y":
			continue
		else:
			break

	print("\nThanks for playing!")

if __name__ == "__main__":
	main()