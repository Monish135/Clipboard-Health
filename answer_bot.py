import sys
import os

try:
    if len(sys.argv) < 2:
        print("Error: No question provided.")
        sys.exit(1)  # Exit the script with an error code

    # Get the question from the command-line argument
    question = sys.argv[1]
    print(f"Received question: {question}")

    # Load your scraped content or other logic here
    with open("scraped_content.txt", "r") as file:
        scraped_content = file.read()

    # Implement your chatbot logic here and print a response
    # For now, we'll just return a placeholder response
    response = f"Bot response to: {question}"
    print(response)

except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
