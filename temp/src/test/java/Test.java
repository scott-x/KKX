import java.util.Random;

/**
 * Created by 003 on 2018/9/17.
 */
public class Test
{
	public static void main(String[] args) {
		String string ="ABCDEFGHIJQLMNOPQRSTUVWXCZ";
		Random random=new Random();
		char a1=string.charAt(random.nextInt(string.length()));
		System.out.println(a1);
	}
}
