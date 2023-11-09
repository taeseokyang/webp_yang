import '../CSS/Resume.css' ;

const Resume = () => {
  return (
    <div id = "resume">
	    <em>1.기초 자료</em>
	    <table>
		    <tr>
			    <td  rowspan="6" >사 진</td>
			    <td  bgcolor="#e3fcff">성 명</td>
			    <td>양태석</td>
  			  <td  bgcolor="#e3fcff">한 문</td>
	  		  <td></td>
	  	  </tr>
		    <tr>
  			  <td bgcolor="#e3fcff">주민등록번호</td>
	  		  <td colspan="3">030123 - ******</td>
  		  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">E-mail</td>
	  		  <td colspan="3">ts.yang.0123@gmail.com</td>
	  	  </tr>
	  	  <tr>
	  		  <td bgcolor="#e3fcff">전화번호</td>
	  		  <td>010-5239-5132</td>
	  		  <td bgcolor="#e3fcff">휴대폰</td>
	  		  <td>010-52395132</td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">우편번호</td>
	  	  	<td></td>	
	  	  	<td bgcolor="#e3fcff">비상연락처</td>
	  	  	<td></td>
	  	  </tr>
	  	  <tr>
	  	  	<td bgcolor="#e3fcff">주소</td>
	  	  	<td colspan="3">서울시 동대문구 장안동</td>
	  	  </tr>	
	    </table>

      <em>2.학력사항</em>
      <table>
      <tr>
	      <th bgcolor="#e3fcff">기간</th>
	      <th bgcolor="#e3fcff">상세내용</th>
	      <th bgcolor="#e3fcff">비고</th>
      </tr>
	    <tr>
	  	  <td>초등학교</td> <td>군자 초등학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>중학교</td> <td>신천 중학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>고등학교</td>	<td>대진 디자인 고등학교</td> <td>졸업</td>
	    </tr>
	    <tr>
	    	<td>대학교 </td> <td>가천대학교</td> <td>졸업</td>
	    </tr>
    </table>

    <em>3. 경력사항</em>
    <table>
      <tr>
        <th bgcolor="#e3fcff">기간</th>
		    <th bgcolor="#e3fcff">관련</th>
      	</tr>
	    <tr>
		   <td>2025~2025</td> <td>카카오 백엔드 개발자</td>
	    </tr>
	    <tr>
		   <td>2026~2026</td> <td>토스 백엔드 개발자</td>
	    </tr>
	    <tr>
		   <td>2027~2027</td> <td>네이버 백엔드 개발자</td>
	    </tr>
	    <tr>
		   <td>2028~2028</td> <td>구글 백엔드 개발자</td>
	    </tr>
    </table>

    <em>4. 개인능력 및 장단점</em>
    <table>
	    <tr height="30">
	  	  <td rowspan="2" bgcolor="#e3fcff">자격증 및 포상</td>
	  	  <td colspan="3">정보처리기사</td>
	  	  <td colspan="1">한국산업인력공단</td>
	    </tr>
	    <tr height="30"> 
        <td colspan="3">운전면허증</td>
        <td colspan="1">경찰청</td>
  	  </tr>
  	  <tr height="30"> 
        <td rowspan="2" bgcolor="#e3fcff">컴퓨터능력</td>
  		  <td colspan="2">다수의 개발 경험</td>
        <td bgcolor="#e3fcff">상/중/하</td><td>상</td>
      </tr>
	    <tr height="30" > 
		    <td colspan="2"></td>
        <td bgcolor="#e3fcff">상/중/하</td>
	  	  <td>상</td>
      </tr>
	    <tr height="30"> 
		    <td rowspan="2" bgcolor="#e3fcff">취미</td>	
		    <td colspan="2">일렉 기타</td>
        <td bgcolor="#e3fcff">특기</td>
		    <td>저글링</td>
      </tr>
    </table>

		<div id="pledge">
			<br/>위의 사실이 틀림이 없음을 서약합니다.<br/>
      작성일 2023년 10월 25일<br/>
    	작성자 (인) 
		</div>
  </div>
  );
};

export default Resume;