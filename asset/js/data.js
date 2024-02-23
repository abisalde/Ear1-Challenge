const template = `
		<span class="custom-option" data-countryCode="DZ" value="213">+213</span>
		<span class="custom-option" data-countryCode="AD" value="376">+376</span>
		<span class="custom-option" data-countryCode="AO" value="244">+244</span>
		<span class="custom-option" data-countryCode="AI" value="1264">+126)</span>
		<span class="custom-option" data-countryCode="AG" value="1268">+1268</span>
		<span class="custom-option" data-countryCode="AR" value="54">+54</span>
		<span class="custom-option" data-countryCode="AM" value="374">+374</span>
		<span class="custom-option" data-countryCode="AW" value="297">+297</span>
		<span class="custom-option" data-countryCode="AU" value="61">+61</span>
		<span class="custom-option" data-countryCode="AT" value="43">+43</span>
		<span class="custom-option" data-countryCode="AZ" value="994">+994</span>
		<span class="custom-option" data-countryCode="BS" value="1242">+1242</span>
		<span class="custom-option" data-countryCode="BH" value="973">+973</span>
		<span class="custom-option" data-countryCode="BD" value="880">+880</span>
		<span class="custom-option" data-countryCode="BB" value="1246">+1246</span>
		<span class="custom-option" data-countryCode="BY" value="375">+375</span>
		<span class="custom-option" data-countryCode="BE" value="32">+32</span>
		<span class="custom-option" data-countryCode="BZ" value="501">+501</span>
		<span class="custom-option" data-countryCode="BJ" value="229">Benin (+229)</span>
		<span class="custom-option" data-countryCode="BM" value="1441">Bermuda (+1441)</span>
		<span class="custom-option" data-countryCode="BT" value="975">Bhutan (+975)</span>
		<span class="custom-option" data-countryCode="BO" value="591">Bolivia (+591)</span>
		<span class="custom-option" data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</span>
		<span class="custom-option" data-countryCode="BW" value="267">Botswana (+267)</span>
		<span class="custom-option" data-countryCode="BR" value="55">Brazil (+55)</span>
		<span class="custom-option" data-countryCode="BN" value="673">Brunei (+673)</span>
		<span class="custom-option" data-countryCode="BG" value="359">Bulgaria (+359)</span>
		<span class="custom-option" data-countryCode="BF" value="226">Burkina Faso (+226)</span>
		<span class="custom-option" data-countryCode="BI" value="257">Burundi (+257)</span>
		<span class="custom-option" data-countryCode="KH" value="855">Cambodia (+855)</span>
		<span class="custom-option" data-countryCode="CM" value="237">Cameroon (+237)</span>
		<span class="custom-option" data-countryCode="CA" value="1">Canada (+1)</span>
		<span class="custom-option" data-countryCode="CV" value="238">Cape Verde Islands (+238)</span>
		<span class="custom-option" data-countryCode="KY" value="1345">Cayman Islands (+1345)</span>
		<span class="custom-option" data-countryCode="CF" value="236">Central African Republic (+236)</span>
		<span class="custom-option" data-countryCode="CL" value="56">Chile (+56)</span>
		<span class="custom-option" data-countryCode="CN" value="86">China (+86)</span>
		<span class="custom-option" data-countryCode="CO" value="57">Colombia (+57)</span>
		<span class="custom-option" data-countryCode="KM" value="269">Comoros (+269)</span>
		<span class="custom-option" data-countryCode="CG" value="242">Congo (+242)</span>
		<span class="custom-option" data-countryCode="CK" value="682">Cook Islands (+682)</span>
		<span class="custom-option" data-countryCode="CR" value="506">Costa Rica (+506)</span>
		<span class="custom-option" data-countryCode="HR" value="385">Croatia (+385)</span>
		<span class="custom-option" data-countryCode="CU" value="53">Cuba (+53)</span>
		<span class="custom-option" data-countryCode="CY" value="90392">Cyprus North (+90392)</span>
		<span class="custom-option" data-countryCode="CY" value="357">Cyprus South (+357)</span>
		<span class="custom-option" data-countryCode="CZ" value="42">Czech Republic (+42)</span>
		<span class="custom-option" data-countryCode="DK" value="45">Denmark (+45)</span>
		<span class="custom-option" data-countryCode="DJ" value="253">Djibouti (+253)</span>
		<span class="custom-option" data-countryCode="DM" value="1809">Dominica (+1809)</span>
		<span class="custom-option" data-countryCode="DO" value="1809">Dominican Republic (+1809)</span>
		<span class="custom-option" data-countryCode="EC" value="593">Ecuador (+593)</span>
		<span class="custom-option" data-countryCode="EG" value="20">Egypt (+20)</span>
		<span class="custom-option" data-countryCode="SV" value="503">El Salvador (+503)</span>
		<span class="custom-option" data-countryCode="GQ" value="240">Equatorial Guinea (+240)</span>
		<span class="custom-option" data-countryCode="ER" value="291">Eritrea (+291)</span>
		<span class="custom-option" data-countryCode="EE" value="372">Estonia (+372)</span>
		<span class="custom-option" data-countryCode="ET" value="251">Ethiopia (+251)</span>
		<span class="custom-option" data-countryCode="FK" value="500">Falkland Islands (+500)</span>
		<span class="custom-option" data-countryCode="FO" value="298">Faroe Islands (+298)</span>
		<span class="custom-option" data-countryCode="FJ" value="679">Fiji (+679)</span>
		<span class="custom-option" data-countryCode="FI" value="358">Finland (+358)</span>
		<span class="custom-option" data-countryCode="FR" value="33">France (+33)</span>
		<span class="custom-option" data-countryCode="GF" value="594">French Guiana (+594)</span>
		<span class="custom-option" data-countryCode="PF" value="689">French Polynesia (+689)</span>
		<span class="custom-option" data-countryCode="GA" value="241">Gabon (+241)</span>
		<span class="custom-option" data-countryCode="GM" value="220">Gambia (+220)</span>
		<span class="custom-option" data-countryCode="GE" value="7880">Georgia (+7880)</span>
		<span class="custom-option" data-countryCode="DE" value="49">Germany (+49)</span>
		<span class="custom-option" data-countryCode="GH" value="233">Ghana (+233)</span>
		<span class="custom-option" data-countryCode="GI" value="350">Gibraltar (+350)</span>
		<span class="custom-option" data-countryCode="GR" value="30">Greece (+30)</span>
		<span class="custom-option" data-countryCode="GL" value="299">Greenland (+299)</span>
		<span class="custom-option" data-countryCode="GD" value="1473">Grenada (+1473)</span>
		<span class="custom-option" data-countryCode="GP" value="590">Guadeloupe (+590)</span>
		<span class="custom-option" data-countryCode="GU" value="671">Guam (+671)</span>
		<span class="custom-option" data-countryCode="GT" value="502">Guatemala (+502)</span>
		<span class="custom-option" data-countryCode="GN" value="224">Guinea (+224)</span>
		<span class="custom-option" data-countryCode="GW" value="245">Guinea - Bissau (+245)</span>
		<span class="custom-option" data-countryCode="GY" value="592">Guyana (+592)</span>
		<span class="custom-option" data-countryCode="HT" value="509">Haiti (+509)</span>
		<span class="custom-option" data-countryCode="HN" value="504">Honduras (+504)</span>
		<span class="custom-option" data-countryCode="HK" value="852">Hong Kong (+852)</span>
		<span class="custom-option" data-countryCode="HU" value="36">Hungary (+36)</span>
		<span class="custom-option" data-countryCode="IS" value="354">Iceland (+354)</span>
		<span class="custom-option" data-countryCode="IN" value="91">India (+91)</span>
		<span class="custom-option" data-countryCode="ID" value="62">Indonesia (+62)</span>
		<span class="custom-option" data-countryCode="IR" value="98">Iran (+98)</span>
		<span class="custom-option" data-countryCode="IQ" value="964">Iraq (+964)</span>
		<span class="custom-option" data-countryCode="IE" value="353">Ireland (+353)</span>
		<span class="custom-option" data-countryCode="IL" value="972">Israel (+972)</span>
		<span class="custom-option" data-countryCode="IT" value="39">Italy (+39)</span>
		<span class="custom-option" data-countryCode="JM" value="1876">Jamaica (+1876)</span>
		<span class="custom-option" data-countryCode="JP" value="81">Japan (+81)</span>
		<span class="custom-option" data-countryCode="JO" value="962">Jordan (+962)</span>
		<span class="custom-option" data-countryCode="KZ" value="7">Kazakhstan (+7)</span>
		<span class="custom-option" data-countryCode="KE" value="254">Kenya (+254)</span>
		<span class="custom-option" data-countryCode="KI" value="686">Kiribati (+686)</span>
		<span class="custom-option" data-countryCode="KP" value="850">Korea North (+850)</span>
		<span class="custom-option" data-countryCode="KR" value="82">Korea South (+82)</span>
		<span class="custom-option" data-countryCode="KW" value="965">Kuwait (+965)</span>
		<span class="custom-option" data-countryCode="KG" value="996">Kyrgyzstan (+996)</span>
		<span class="custom-option" data-countryCode="LA" value="856">Laos (+856)</span>
		<span class="custom-option" data-countryCode="LV" value="371">Latvia (+371)</span>
		<span class="custom-option" data-countryCode="LB" value="961">Lebanon (+961)</span>
		<span class="custom-option" data-countryCode="LS" value="266">Lesotho (+266)</span>
		<span class="custom-option" data-countryCode="LR" value="231">Liberia (+231)</span>
		<span class="custom-option" data-countryCode="LY" value="218">Libya (+218)</span>
		<span class="custom-option" data-countryCode="LI" value="417">Liechtenstein (+417)</span>
		<span class="custom-option" data-countryCode="LT" value="370">Lithuania (+370)</span>
		<span class="custom-option" data-countryCode="LU" value="352">Luxembourg (+352)</span>
		<span class="custom-option" data-countryCode="MO" value="853">Macao (+853)</span>
		<span class="custom-option" data-countryCode="MK" value="389">Macedonia (+389)</span>
		<span class="custom-option" data-countryCode="MG" value="261">Madagascar (+261)</span>
		<span class="custom-option" data-countryCode="MW" value="265">Malawi (+265)</span>
		<span class="custom-option" data-countryCode="MY" value="60">Malaysia (+60)</span>
		<span class="custom-option" data-countryCode="MV" value="960">Maldives (+960)</span>
		<span class="custom-option" data-countryCode="ML" value="223">Mali (+223)</span>
		<span class="custom-option" data-countryCode="MT" value="356">Malta (+356)</span>
		<span class="custom-option" data-countryCode="MH" value="692">Marshall Islands (+692)</span>
		<span class="custom-option" data-countryCode="MQ" value="596">Martinique (+596)</span>
		<span class="custom-option" data-countryCode="MR" value="222">Mauritania (+222)</span>
		<span class="custom-option" data-countryCode="YT" value="269">Mayotte (+269)</span>
		<span class="custom-option" data-countryCode="MX" value="52">Mexico (+52)</span>
		<span class="custom-option" data-countryCode="FM" value="691">Micronesia (+691)</span>
		<span class="custom-option" data-countryCode="MD" value="373">Moldova (+373)</span>
		<span class="custom-option" data-countryCode="MC" value="377">Monaco (+377)</span>
		<span class="custom-option" data-countryCode="MN" value="976">Mongolia (+976)</span>
		<span class="custom-option" data-countryCode="MS" value="1664">Montserrat (+1664)</span>
		<span class="custom-option" data-countryCode="MA" value="212">Morocco (+212)</span>
		<span class="custom-option" data-countryCode="MZ" value="258">Mozambique (+258)</span>
		<span class="custom-option" data-countryCode="MN" value="95">Myanmar (+95)</span>
		<span class="custom-option" data-countryCode="NA" value="264">Namibia (+264)</span>
		<span class="custom-option" data-countryCode="NR" value="674">Nauru (+674)</span>
		<span class="custom-option" data-countryCode="NP" value="977">Nepal (+977)</span>
		<span class="custom-option" data-countryCode="NL" value="31">Netherlands (+31)</span>
		<span class="custom-option" data-countryCode="NC" value="687">New Caledonia (+687)</span>
		<span class="custom-option" data-countryCode="NZ" value="64">New Zealand (+64)</span>
		<span class="custom-option" data-countryCode="NI" value="505">Nicaragua (+505)</span>
		<span class="custom-option" data-countryCode="NE" value="227">Niger (+227)</span>
		<span class="custom-option" data-countryCode="NU" value="683">Niue (+683)</span>
		<span class="custom-option" data-countryCode="NF" value="672">Norfolk Islands (+672)</span>
		<span class="custom-option" data-countryCode="NP" value="670">Northern Marianas (+670)</span>
		<span class="custom-option" data-countryCode="NO" value="47">Norway (+47)</span>
		<span class="custom-option" data-countryCode="OM" value="968">Oman (+968)</span>
		<span class="custom-option" data-countryCode="PW" value="680">Palau (+680)</span>
		<span class="custom-option" data-countryCode="PA" value="507">Panama (+507)</span>
		<span class="custom-option" data-countryCode="PG" value="675">Papua New Guinea (+675)</span>
		<span class="custom-option" data-countryCode="PY" value="595">Paraguay (+595)</span>
		<span class="custom-option" data-countryCode="PE" value="51">Peru (+51)</span>
		<span class="custom-option" data-countryCode="PH" value="63">Philippines (+63)</span>
		<span class="custom-option" data-countryCode="PL" value="48">Poland (+48)</span>
		<span class="custom-option" data-countryCode="PT" value="351">Portugal (+351)</span>
		<span class="custom-option" data-countryCode="PR" value="1787">Puerto Rico (+1787)</span>
		<span class="custom-option" data-countryCode="QA" value="974">Qatar (+974)</span>
		<span class="custom-option" data-countryCode="RE" value="262">Reunion (+262)</span>
		<span class="custom-option" data-countryCode="RO" value="40">Romania (+40)</span>
		<span class="custom-option" data-countryCode="RU" value="7">Russia (+7)</span>
		<span class="custom-option" data-countryCode="RW" value="250">Rwanda (+250)</span>
		<span class="custom-option" data-countryCode="SM" value="378">San Marino (+378)</span>
		<span class="custom-option" data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</span>
		<span class="custom-option" data-countryCode="SA" value="966">Saudi Arabia (+966)</span>
		<span class="custom-option" data-countryCode="SN" value="221">Senegal (+221)</span>
		<span class="custom-option" data-countryCode="CS" value="381">Serbia (+381)</span>
		<span class="custom-option" data-countryCode="SC" value="248">Seychelles (+248)</span>
		<span class="custom-option" data-countryCode="SL" value="232">Sierra Leone (+232)</span>
		<span class="custom-option" data-countryCode="SG" value="65">Singapore (+65)</span>
		<span class="custom-option" data-countryCode="SK" value="421">Slovak Republic (+421)</span>
		<span class="custom-option" data-countryCode="SI" value="386">Slovenia (+386)</span>
		<span class="custom-option" data-countryCode="SB" value="677">Solomon Islands (+677)</span>
		<span class="custom-option" data-countryCode="SO" value="252">Somalia (+252)</span>
		<span class="custom-option" data-countryCode="ZA" value="27">South Africa (+27)</span>
		<span class="custom-option" data-countryCode="ES" value="34">Spain (+34)</span>
		<span class="custom-option" data-countryCode="LK" value="94">Sri Lanka (+94)</span>
		<span class="custom-option" data-countryCode="SH" value="290">St. Helena (+290)</span>
		<span class="custom-option" data-countryCode="KN" value="1869">St. Kitts (+1869)</span>
		<span class="custom-option" data-countryCode="SC" value="1758">St. Lucia (+1758)</span>
		<span class="custom-option" data-countryCode="SD" value="249">Sudan (+249)</span>
		<span class="custom-option" data-countryCode="SR" value="597">Suriname (+597)</span>
		<span class="custom-option" data-countryCode="SZ" value="268">Swaziland (+268)</span>
		<span class="custom-option" data-countryCode="SE" value="46">Sweden (+46)</span>
		<span class="custom-option" data-countryCode="CH" value="41">Switzerland (+41)</span>
		<span class="custom-option" data-countryCode="SI" value="963">Syria (+963)</span>
		<span class="custom-option" data-countryCode="TW" value="886">Taiwan (+886)</span>
		<span class="custom-option" data-countryCode="TJ" value="7">Tajikstan (+7)</span>
		<span class="custom-option" data-countryCode="TH" value="66">Thailand (+66)</span>
		<span class="custom-option" data-countryCode="TG" value="228">Togo (+228)</span>
		<span class="custom-option" data-countryCode="TO" value="676">Tonga (+676)</span>
		<span class="custom-option" data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</span>
		<span class="custom-option" data-countryCode="TN" value="216">Tunisia (+216)</span>
		<span class="custom-option" data-countryCode="TR" value="90">Turkey (+90)</span>
		<span class="custom-option" data-countryCode="TM" value="7">Turkmenistan (+7)</span>
		<span class="custom-option" data-countryCode="TM" value="993">Turkmenistan (+993)</span>
		<span class="custom-option" data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</span>
		<span class="custom-option" data-countryCode="TV" value="688">Tuvalu (+688)</span>
		<span class="custom-option" data-countryCode="UG" value="256">Uganda (+256)</span>
		<span class="custom-option" data-countryCode="GB" value="44">UK (+44)</span>
		<span class="custom-option" data-countryCode="UA" value="380">Ukraine (+380)</span>
		<span class="custom-option" data-countryCode="AE" value="971">United Arab Emirates (+971)</span>
		<span class="custom-option" data-countryCode="UY" value="598">Uruguay (+598)</span>
		<span class="custom-option" data-countryCode="US" value="1">USA (+1)</span>
		<span class="custom-option" data-countryCode="UZ" value="7">Uzbekistan (+7)</span>
		<span class="custom-option" data-countryCode="VU" value="678">Vanuatu (+678)</span>
		<span class="custom-option" data-countryCode="VA" value="379">Vatican City (+379)</span>
		<span class="custom-option" data-countryCode="VE" value="58">Venezuela (+58)</span>
		<span class="custom-option" data-countryCode="VN" value="84">Vietnam (+84)</span>
		<span class="custom-option" data-countryCode="VG" value="84">Virgin Islands - British (+1284)</span>
		<span class="custom-option" data-countryCode="VI" value="84">Virgin Islands - US (+1340)</span>
		<span class="custom-option" data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</span>
		<span class="custom-option" data-countryCode="YE" value="969">Yemen (North)(+969)</span>
		<span class="custom-option" data-countryCode="YE" value="967">Yemen (South)(+967)</span>
		<span class="custom-option" data-countryCode="ZM" value="260">Zambia (+260)</span>
		<span class="custom-option" data-countryCode="ZW" value="263">Zimbabwe (+263)</span>`;

const SelectWrapper = document.querySelector('.select-wrapper-inner');
const WrapperContainer = document.querySelector('.select-wrapper');
const optionsWrapper = document.querySelector('#select_options');

const dropdown = () => {
	SelectWrapper.classList.toggle('active');

	optionsWrapper.innerHTML = template;
	console.log('dropdown');
};

// WrapperContainer.addEventListener('click', dropdown);
