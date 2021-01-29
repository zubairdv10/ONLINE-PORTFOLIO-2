import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import MyForm from "./form";
import picture from "./laptop.jpg"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={5}>
            <h2 className="font1-1">Aspiring Web Developer</h2>
            

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Feel free to give me a call or send me a message
            </p>
            <img src={picture} alt="Avatar" className="imgSize"/>
            
         
            
          </Cell>
          
          
          <Cell col={4}>
            <h2 className="font1-1">Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (081) 4333 665
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                    (081) 4333 665
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone" aria-hidden="true" />
                    (021) 704 2835
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Anton" }}
                  >
                    
                  </ListItemContent>
                </ListItem>
                <Cell col={2}><MyForm/></Cell>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
