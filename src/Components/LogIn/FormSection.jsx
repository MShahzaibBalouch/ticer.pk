import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

function FormSection() {
    return (
        <div>
            <Container>
                <Form>
                    <Row className='Row-FormSection w-100'>
                        <Col md={2} className='Col-FormSection'>
                            <div class="">
                                <div class="">
                                    <label class="">Name</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg>
                                    <input class="" type="text" placeholder="your Name" />
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className='Col-FormSection'>
                            <div class="">
                                <div class="">
                                    <label class="">Email</label>
                                    <span class="" data-uk-icon="icon: user"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="user"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg></span>
                                    <input class="" type="email" placeholder="your e-mail" />
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className='Col-FormSection'>
                            <div class="uk-form-controls">
                                <div class="uk-inline">
                                    <label class="uk-form-label impx-text-white">Arrival</label>
                                    <span class="uk-form-icon uk-icon" data-uk-icon="icon: calendar"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="calendar"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path><rect width="1" height="3" x="6" y="2"></rect><rect width="1" height="3" x="13" y="2"></rect></svg></span>
                                    <input class="uk-input booking-arrival uk-border-rounded" type="date" placeholder="m/dd/yyyy" />
                                </div>
                            </div>
                        </Col>
                        <Col md={1} className='Col-FormSection'>
                            <div class="uk-form-controls">
                                <div class="uk-inline">
                                    <label class="uk-form-label impx-text-white">Departure</label>
                                    <span class="uk-form-icon uk-icon" data-uk-icon="icon: calendar"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="calendar"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path><rect width="1" height="3" x="6" y="2"></rect><rect width="1" height="3" x="13" y="2"></rect></svg></span>
                                    <input class="uk-input booking-departure uk-border-rounded" type="date" placeholder="m/dd/yyyy" />
                                </div>
                            </div>
                        </Col>
                        <Col md={2} className='Col-FormSection'>
                            <div class="uk-form-controls uk-position-relative">
                                <label class="uk-form-label impx-text-white" for="form-rooms-select">Cource</label>
                                <span class="uk-form-icon select-icon uk-icon" data-uk-icon="icon: album"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="album"><rect x="5" y="2" width="10" height="1"></rect><rect x="3" y="4" width="14" height="1"></rect><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"></rect></svg></span>
                                <select class="uk-select uk-border-rounded" id="form-rooms-select">
                                    <option value="">Please select...</option>
                                    <option value="room_1">Full Stack Development</option>
                                    <option value="room_2">Mobile App Development</option>
                                    <option value="room_3">Digital Marketing</option>
                                    <option value="room_4">Ghraphic Disigning</option>
                                    <option value="room_5">Enlish Languahge</option>
                                </select>
                            </div>
                        </Col>

                        <Col className='Col-FormSection'>
                            <div>
                                <label class="uk-form-label impx-text-white" for="form-rooms-select">Sign In</label>
                                <span class="uk-form-icon select-icon uk-icon" data-uk-icon="icon: album"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                </svg></span>
                                <label class="uk-form-label empty-label">&nbsp;</label>
                                <button class="uk-button uk-width-1-1 btn-primary">Enrrolle Now!</button>
                            </div>
                        </Col>

                    </Row>
                </Form>
            </Container>
        </div>
    )
}
export default FormSection;