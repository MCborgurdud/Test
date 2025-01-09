import random

def play_game():
    while True:
        # Prompt the user to pick a number
        user_input = input("Pick a number between 1 and 10: ")
        
        # Ensure the input is a valid number
        try:
            user_guess = int(user_input)
            if user_guess < 1 or user_guess > 10:
                print("Please pick a number within the range of 1 to 10.")
                continue
        except ValueError:
            print("Invalid input! Please enter a number.")
            continue
        
        # Generate a random number between 1 and 10
        answer = random.randint(1, 10)
        
        # Check if the user's guess matches the answer
        if user_guess == answer:
            print("You won! The number was indeed", answer)
        else:
            print("Sorry, the correct number was", answer)
        
        # Ask if the user wants to play again
        replay = input("Do you want to play again (Y/N)? ").strip().upper()
        if replay != 'Y':
            print("Thanks for playing!")
            break

# Start the game
play_game()
