import re, os, sys

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def hackfile(path) : 
    return os.path.dirname(os.path.abspath(__file__)) + "/" + path

text_file = open(hackfile("alice.txt"), "r")
data = text_file.read()
text_file.close()

message = ["Great, you managed to find the find my notes",
           "I need you to access my computer, but I forgot my password",
           "It's a English word followed by a number with multiple digits",
           "I can look through the book, but I need you to give me the regex to find it",
           "A regex is a vital skill for h4X00rz, it allows you to find stuff fast",
           "",
           "But you don't know what it is yet.",
           "I'd explain it, but the cops are banging on my door",
           "goto https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html",
           "",
           "just put your regex in the (now empty) solution.txt and run the script"]

for m in message:
    print(m)
    
solution_file = open(hackfile("solution.txt"), "r")
raw_solutions = solution_file.readlines()
solution_file.close()

if len(raw_solutions) > 0:
    solution = raw_solutions[0]
    print("trying " + bcolors.WARNING + solution)
    try:
        if solution[0] != '(':
            solution = "(" + solution + ")"
        solution_re = re.compile(solution)
        answer = solution_re.search(data)
        if answer is None:
            print("We couldn't find a password using your regex")
            print('\nPlease try again :)')
    except Exception as ex:
        print("\n" + bcolors.FAIL + "Something went wrong matching your solution \"{0}\"".format(solution.replace('\n', '')))
        print("details " + str(ex))
        print('\nPlease try again :)')
        sys.exit(1)
        
    sum = 0
    for i in answer.group(1).replace('\n', ''):
        sum  = sum + ord(i)
        
    if (sum == 664):
        print(bcolors.OKGREEN + "You're in. Congrats agent, you did it, you're done here!")
        sys.exit(0)
    else:
        print(bcolors.FAIL + "Something went wrong matching your solution \"{0}\"".format(solution.replace('\n', '')))
        sys.exit(1)
    