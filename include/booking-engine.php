
<!-- <script src="https://live.ipms247.com/themes/reservation/js/bookingbtn/jquery-ui.js"
type="text/javascript"></script>

<script src="https://live.ipms247.com/themes/reservation/js/bookingbtn/common.js"
type="text/javascript"></script>

<script src="https://live.ipms247.com/themes/reservation/js/bookingbtn/resui_resbookingbox.js"
type="text/javascript"></script> -->


<div class="boxnew">
    <div class="resboxnew">
        <form method="post" name="_resBBBox" target="_blank" onsubmit="return BB_valiDateFomData();">
            <div id="bb_resBookingBox">
                <div class="select_box">
                    <label class="rezlabel">Property</label><br>
                    <select id="select_hotel" class="reztxtboxnw" name="select_hotel">
                        <option selected="selected" value="0">Select Property</option>
                        <option value="goldstonecomfortdehradun">GOLDSTONE COMFORT, DEHRADUN</option>
                        <option value="goldstoneelitevrindavan">GOLDSTONE VRINDAVAN ELITE</option>
                    </select>
                </div>
                <div class="">
                    <label>Check In</label>
                    <input id="eZ_chkin" name="eZ_chkin" readonly="readonly" type="text" placeholder="DD-MM-YYYY">
                </div>
                <div class="">
                    <label>Check Out</label>
                    <input id="eZ_chkout" name="eZ_chkout" readonly="readonly" type="text" placeholder="DD-MM-YYYY">
                </div>
                <input id="eZ_Nights" name="eZ_Nights" type="hidden" value="1"><input id="eZ_adult" name="eZ_adult" type="hidden" value="1"><input id="eZ_child" name="eZ_child" type="hidden" value="0"><input id="calformat" name="calformat" type="hidden" value="dd-mm-yy"><input id="eZ_room" name="eZ_room" type="hidden" value="1">
                
                <div class="select_box">
                    <label class="rezlabel">Rooms</label>

                    
                    <select class="reztxtboxnw" name="rooms">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="select_box">
                    <label class="rezlabel">Adults</label>
                    <select class="reztxtboxnw" name="adults">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div class="">
                    <input type="submit" id="bb_resBtn" class="book-now-button" value="Book Now">
                </div>
            </div>
        </form>
    </div>
</div>