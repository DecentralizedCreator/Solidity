import json

truffleFile = json.load(open('./build/contracts/Subscribe.json'))
abi = truffleFile['abi']

functionSelector = []
for fields in abi:
    if(fields['type'] == 'function'):
        functionName = fields['name']
        functionInputs = []

        for inputs in fields['inputs']:
            functionInputs.append(inputs['type'])

        functionSelector.append([functionName, functionInputs])

for functions in functionSelector:
    functionName = functions[0]
    functionType = functions[1]
    s = functionName + '('

    for i in range(len(functionType)):
        s += functionType[i]
        if(i+1 < len(functionType)):
            s += ','

    s += ')'

    print(s)
