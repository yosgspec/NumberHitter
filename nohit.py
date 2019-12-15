import subprocess
cmd=lambda cmd: subprocess.check_output(cmd,shell=True).decode("cp932")

print("-- Number Hitter! --")
correct=int(input().strip())
hint="START"
result=""

i=0
while True:
	i+=1
	result=(cmd(f"echo {hint} {' '.join(result)} | player")
		.strip()
		.split(" "))
	ans=result[0]
	hint=cmd(f"echo {ans} {correct} | cpu").strip()
	print(f"{ans} -> {hint}")
	if hint=="JUST": break

print(f"正解は{correct}です。{i}回目で当てることができました。")
