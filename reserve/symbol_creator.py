import sys

def symbols():
    var = '['
    for i in range(67,79):
        var = '{}{}{}{}'.format(var,"'&#83",i,"',")
    var = var[:-1]
    var = '{}{}'.format(var,"]")
    print(var)

def subscriptions():
    var = '\n'
    print(sys.argv[1])
    
    for i in range (0,int(sys.argv[2])):
        var = '{}{}{}:Subscription\n'.format(var,sys.argv[1],i)
    print(var)


# example 
"""
 python38 .\symbol_creator.py panelClickEventSubscription 12 
"""
subscriptions()