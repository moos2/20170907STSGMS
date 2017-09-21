//객체 리터럴 방식
//'=>' 람다식
var series={
		arithmetic : (s,e)=>{
			var sum=0;
			var startnum=s*1;
			var endnum=e*1;
			for(var i =startnum;i<=endnum;i++){
				sum+=i;
			}
			return sum;
	},
	switchSeries : function(s,e){
		var sum=0;
		var sw=0;
		var startnum=s*1;
		var endnum=e*1;
		for(var i=startnum;i<endnum;i++){
			if(sw==0){
				sum=sum-i;
				sw=1;
			}else{
				sum = sum+i;
				sw=0;
			}
		}
		return sum;
	},
	geometric:(a,r,n)=>{
		//a + ar^1 + ar^2 + ... + ar^n
		//first term, geometric ratio, n term
		var gp;
        var ac,rc,nc;
        at=a; 
        gr=r; 
        nt=n;
        nt=n-1;
        gp=at*(Math.pow(gr,nt));
        return gp;
	},
	differseq:(i,j,n)=>{
		var sum=1;
		var incr=(i*1)-1;
		var jj=j*1;
		do{
			incr++;
			jj+=incr;
			sum+=jj;
		}while(incr<n-1);
		return "jj는: "+jj+"\n총합계: "+sum;
	},
	factorial:(i,j,n)=>{
		var sum=i*1;
		var ii=i*1;
		var jj=j*1;
		do{
			ii++;
			jj*=ii;
			sum+=jj;
		}while(ii<n);
		return sum;
	},
	fibonacci:(n)=>{
		var hap= 0;
		var cnt=0;
		var c=0;
		var a=1;
		var b=1;
		var nn=n*1;
		hap=2;
		cnt=2;
		while(1){
			c=a+b;
			hap+=c;
			cnt++;
			if(cnt<nn){
				a=b;
				b=c;
			}else{
				break;
			}
		}
		return hap;
	}
};