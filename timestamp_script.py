import datetime

# Open the file in append mode

with open('timestamp.txt', 'a') as file:

    # Get the current date and time

    current_time = datetime.datetime.now()

    # Append the current time to the file

    file.write(f'Timestamp: {current_time}
')
