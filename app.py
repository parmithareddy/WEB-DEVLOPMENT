from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['POST'])
def handle_post():
    data = request.get_json()
    
    # Extract data from the request
    user_data = data.get('user_data', [])
    
    # Initialize arrays
    numbers = []
    alphabets = []
    
    # Sort and categorize the data
    for item in user_data:
        if item.isdigit():
            numbers.append(item)
        elif item.isalpha():
            alphabets.append(item)
    
    # Find the highest lowercase alphabet
    lowercase_alphabets = [char for char in alphabets if char.islower()]
    highest_lowercase = max(lowercase_alphabets) if lowercase_alphabets else None

    # Construct the response
    response = {
        "is_success": True,
        "user_id": "john_doe_17091999",  # Replace with actual dynamic user_id
        "email": "john_doe@college.com",  # Replace with actual email
        "college_roll_number": "123456",  # Replace with actual roll number
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase": highest_lowercase
    }
    
    return jsonify(response), 200

@app.route('/bfhl', methods=['GET'])
def handle_get():
    response = {
        "operation_code": 1
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
