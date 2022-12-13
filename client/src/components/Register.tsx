import { useState } from "react"


export default function Register() {
    
    const [registerData, setRegisterData] = useState({
        fullname: "",
        email: "",
        gender: "",
        age: "",
        batch: "",
    });

    const [loading, setLoading] = useState<boolean>();

    
    const submitFormData = async (e:any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const resp = await fetch('http://node-server-lb-1092089902.us-east-1.elb.amazonaws.com/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
            });
            
        const data = await resp.json();

        if(!data.success){
            setLoading(false);
            return alert(data.message);
        }
            
        const paymentResp = await fetch(`http://node-server-lb-1092089902.us-east-1.elb.amazonaws.com/pay/${data.user.id}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
        });
            
        const paymentData = await paymentResp.json();

        alert(paymentData.message);
        
        setLoading(false);
        
        } catch (error: any) {
            setLoading(false);
            alert(`Server error, please try again`);
        }
        
    }
    
    return (
        <div className="overlay">
        
        <form onSubmit={(e) => submitFormData(e)}>
          <div className="con">
            <header className="head-form">
              <h2>Register</h2>
              <br />
              <p style={{color: "red"}}>* for existing users, put your same email id as you put before</p>
            </header>
            <br />
            <div className="field-set">
              
        
              <input 
              onChange={(e) => setRegisterData({...registerData, fullname: e.target.value})} className="form-input" 
              id="txt-input" 
              type="text" 
              placeholder="Full Name" 
              required />
              <br />
             
              

              <input 
              onChange={(e) => setRegisterData({...registerData, email: e.target.value})} className="form-input" 
              id="txt-input" 
              type="email" 
              placeholder="Email" 
              required />
              <br />

              <input 
              onChange={(e) => setRegisterData({...registerData, gender: e.target.value})} className="form-input" 
              id="txt-input" 
              type="text" 
              placeholder="Gender" 
              required />
              <br />

              <input 
              onChange={(e) => setRegisterData({...registerData, age: e.target.value})} className="form-input" 
              id="txt-input" 
              type="number" 
              placeholder="Age" 
              required />
              <br />
             
              <input 
              onChange={(e) => setRegisterData({...registerData, batch: e.target.value})} className="form-input" 
              id="txt-input" 
              type="text" 
              placeholder="Batch" 
              required />
              <br />
              
             
              <br />
              <button  className="log-in"> {loading ? 'Submitting....' : 'Register'}</button>
            </div>
           
          </div>
        </form>
      </div>
    )
}