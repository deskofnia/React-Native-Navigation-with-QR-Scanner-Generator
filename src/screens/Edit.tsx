import React, { useEffect, useState } from 'react'
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Alarm, { removeAlarm, scheduleAlarm, updateAlarm } from '../alarm';
import { colors, globalStyles } from '../../App';
import { DayPicker } from '../components/DayPicker';


interface IAlarm {
    uid: string;
    days: Array<number>;
    hour: number;
    minutes: number;
    snoozeInterval: number;
    title: string;
    description: string;
    repeating: boolean;
    active: boolean;
    enabled: boolean;
}

const Edit = ({ route, navigation }: any) => {

    const [alarm, setAlarm] = useState<IAlarm>(Alarm.getEmpty());
    const [mode, setMode] = useState("");
    const [showPicker, setShowPicker] = useState(false);


    useEffect(() => {
        if (route.params && route.params.alarm) {
            setAlarm(new Alarm(route.params.alarm));
            setMode('EDIT');
        } else {
            setAlarm(new Alarm());
            setMode('CREATE');
        }
    }, []);

    function update(updates: any) {
        const a = Object.assign({}, alarm);
        for (let u of updates) {
            a[u[0]] = u[1];
        }
        setAlarm(a);
    }

    async function onSave() {
        if (mode === 'EDIT') {
            alarm.active = true;
            await updateAlarm(alarm);
        }
        if (mode === 'CREATE') {
            await scheduleAlarm(alarm);
        }
        navigation.goBack();
    }

    async function onDelete() {
        await removeAlarm(alarm.uid);
        navigation.goBack();
    }


    function getDate(hour: any, minutes: any) {
        const date = new Date();
        date.setHours(hour);
        date.setMinutes(minutes);
        return date;
    }

    if (!alarm) {
        return <View />;
    }
    return (
        <View style={globalStyles.container}>
            <View style={[globalStyles.innerContainer, styles.container]}>
                <View style={styles.inputsContainer}>
                    <View>
                        <TouchableOpacity
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => setShowPicker(true)}>
                            <Text style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 70,
                            }}>
                                {alarm.hour < 10 ? '0' + alarm.hour : alarm.hour}:
                                {alarm.minutes < 10 ? '0' + alarm.minutes : alarm.minutes}
                            </Text>
                        </TouchableOpacity>
                        {showPicker && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                timeZoneOffsetInMinutes={0}
                                value={getDate(alarm.hour, alarm.minutes)}
                                mode={'time'}
                                is24Hour={true}
                                display="default"
                                onChange={(e, date: Date | undefined) => {
                                    setShowPicker(false);
                                    update([
                                        ['hour', date?.getHours()],
                                        ['minutes', date?.getMinutes()],
                                    ])
                                }}
                            />
                        )}
                    </View>

                    <View style={{
                        marginTop: 5,
                        marginBottom: 5,
                    }}>
                        <View style={{
                            margin: 10,
                            marginLeft: 0,
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: colors.BLUE,
                            }}>Title</Text>
                        </View>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 10,
                                paddingTop: 5,
                                paddingBottom: 5,
                                borderColor: colors.GREY,
                                fontWeight: 'bold',
                            }}
                            onChangeText={v => update([['title', v]])}
                            value={alarm.title}
                        />
                    </View>
                    <View style={{
                        marginTop: 5,
                        marginBottom: 5,
                    }}>
                        <View style={{
                            margin: 10,
                            marginLeft: 0,
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: colors.BLUE,
                            }}>Description</Text>
                        </View>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderRadius: 12,
                                padding: 10,
                                paddingTop: 5,
                                paddingBottom: 5,
                                borderColor: colors.GREY,
                                fontWeight: 'bold',
                            }}
                            onChangeText={v => update([['description', v]])}
                            value={alarm.description}
                        />
                    </View>

                    {/* 
                        Switcher
                    */}
                    <View style={{
                        width: '100%',
                        height: 80,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                color: colors.BLUE,
                            }}>Repeat</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Switch
                                ios_backgroundColor={'black'}
                                trackColor={{ false: colors.GREY, true: colors.BLUE }}
                                value={alarm.repeating}
                                onValueChange={value => update([['repeating', value]])}
                            />
                        </View>
                    </View>

                    {alarm.repeating && (
                        <DayPicker
                            onChange={v => update([['days', v]])}
                            activeDays={alarm.days}
                        />
                    )}
                </View>
                <View style={styles.buttonContainer}>
                    {mode === 'EDIT' ?
                        <TouchableOpacity
                            style={[
                                {
                                    padding: 10,
                                    margin: 10,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    borderWidth: 2,
                                    borderColor: colors.BLUE,
                                    borderRadius: 25,
                                },
                                {
                                    backgroundColor: 'transparent',
                                },
                            ]}
                            onPress={onDelete}
                        // underlayColor="#fff"
                        >
                            <Text
                                style={[{
                                    fontWeight: 'bold',
                                }, {
                                    color: colors.BLUE,
                                }]}>
                                Delete
                            </Text>
                        </TouchableOpacity> :
                        <TouchableOpacity
                            style={[
                                {
                                    padding: 10,
                                    margin: 10,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    borderWidth: 2,
                                    borderColor: colors.BLUE,
                                    borderRadius: 25,
                                },
                                {
                                    backgroundColor: colors.BLUE,
                                },
                            ]}
                            onPress={onSave}
                        // underlayColor="#fff"
                        >
                            <Text
                                style={[{
                                    fontWeight: 'bold',
                                }, {
                                    color: 'white',
                                }]}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}

export default Edit;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
    },
    inputsContainer: {
        width: '100%',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
