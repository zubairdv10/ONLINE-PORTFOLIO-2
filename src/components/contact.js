import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 className="font1-1">Aspiring Web Developer</h2>

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Feel free to give me a call or send me a message
            </p>
          </Cell>
          <Cell col={6}>
            <h2 className="font1-1">Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (081) 4333 665
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                    (081) 4333 665
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone" aria-hidden="true" />
                    (021) 704 2835
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "45px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    zubairdevries127@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
