import os

cmd = "instruments -w 4394a67923a9f3b8a89ae424b461f8901258fe70 \
-t ~/Library/Application\ Support/Instruments/Templates/ios_test.tracetemplate  com.ximalaya.iting \
-e UIASCRIPT /Users/nali/Git/ui-auto-monkey/custom.js -e UIARESULTSPATH /Users/nali/Result/"

os.system(cmd)

'''
for i in range(5): #execute 5 times
	os.system(cmd)
	time.sleep(10800) #per 3 hours
'''
