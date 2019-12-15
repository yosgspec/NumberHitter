using System;

class Program{
	static void Main(){
		var anss=Array.ConvertAll(
			Console.ReadLine()
				.Trim()
				.Split(' '),
			int.Parse);
		var ans=anss[0];
		var correct=anss[1];
		Console.WriteLine(
			correct==ans?
				"JUST":
			correct<ans?
				"HIGH":
				"LOW");
	}
}
